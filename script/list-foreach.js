const getcontainer = document.getElementById("link-container");

    list.forEach(addLink => {
      const element = addLink.render(); 
      getcontainer.appendChild(element);
      getcontainer.appendChild(document.createElement("br")); 
      getcontainer.appendChild(document.createElement("br"));
    });