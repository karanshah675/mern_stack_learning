function customeRender(root, element) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  // domElement.setAttribute('href',element.props.herf)
  // domElement.setAttribute('target',element.props.target)
  for (const prop in element.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  root.appendChild(domElement);
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
    }
  }
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "go to google",
};

const mainContainer = document.getElementById("root");

customeRender(mainContainer, reactElement);
