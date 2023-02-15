interface Vprops {
  sortValue?: number;
}

export const View = (currSortValue: Vprops) => {
  const sortValueArr: number[] = [5, 15];
  const dropdown: HTMLDivElement = document.querySelector("#dropdown");

  if (dropdown?.classList.contains("clicked")) {
    dropdown.innerHTML = `
    <ul class="dropdown-menu" id="qty-selector">
     ${sortValueArr
       .map((qty) => `<li data-sort="${qty}">${qty}개</li>`)
       .join("")}
    </ul>
    </div>
    `;
  } else {
    dropdown.innerHTML = `<ul class="dropdown-menu">${currSortValue.sortValue}개씩</ul>`;
  }
};
