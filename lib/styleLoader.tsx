// Define the types for the arrays and objects
const styles: HTMLStyleElement[] = [];
const containers: Record<string, HTMLElement> = {};

// Define the type for the parent element ID
type ParentElementId = string;

// Create a shadow container with all styles and a placeholder for the app injection
export const createShadowContainer = (
  parentElementId: ParentElementId
): HTMLDivElement | null => {
  const shadowContainer: HTMLElement | null =
    document.getElementById(parentElementId);
  if (!shadowContainer) {
    console.error(`Element with ID ${parentElementId} not found.`);
    return null;
  }

  // Block all styles coming from the light DOM
  shadowContainer.style.all = "initial";

  // Attach shadow DOM
  const shadowRoot: ShadowRoot = shadowContainer.attachShadow({
    mode: "open",
    delegatesFocus: true,
  });

  // Clone styles into the shadow DOM
  shadowRoot.append(
    ...styles.map((style) => style.cloneNode(true) as HTMLStyleElement)
  );

  // Create a body element so that reboot CSS rules work in the shadow DOM
  const body: HTMLBodyElement = document.createElement("body");

  // Create a placeholder for the React app
  const appPlaceholder: HTMLDivElement = document.createElement("div");
  appPlaceholder.id = "app-placeholder";
  body.appendChild(appPlaceholder);

  // Append the body to the shadow root
  shadowRoot.appendChild(body);

  // Store the shadow container in the containers object
  containers[parentElementId] = shadowContainer;

  return appPlaceholder;
};

export const deleteShadowContainer = (id: ParentElementId): void => {
  delete containers[id];
};
