interface Vprops {
  count?: number;
}

export const View = (currentQty: Vprops) => {
  const qtySelector: number[] = [5, 15];
  const dropdown: HTMLDivElement = document.querySelector("#dropdown");

  if (dropdown?.classList.contains("clicked")) {
    dropdown.innerHTML = `
    <ul class="dropdown-menu" id="qty-selector">
     ${qtySelector
       .map((qty) => `<li data-sort="${qty}">${qty}개</li>`)
       .join("")}
    </ul>
    </div>
    `;
  } else {
    dropdown.innerHTML = `<ul class="dropdown-menu">${currentQty.count}개씩</ul>`;
  }
};
