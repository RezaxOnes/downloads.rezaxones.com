  class addLink {
      constructor(name, url) {
        this.name = name;
        this.url = url;
      }

      render() {
        const a = document.createElement("a"); 
        a.className = "dieuhuong-btn"; 
        a.href = this.url; 
        a.target = "_blank";
        a.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square" style="margin-right: 8px;"></i> ${this.name}`;
        return a;
      }
    }