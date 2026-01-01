const container = document.getElementById("link-container");

    list.forEach(addLink => {
      const element = addLink.render(); 
      container.appendChild(element);
      container.appendChild(document.createElement("br")); 
      container.appendChild(document.createElement("br"));
    });