let numbers: number[] = [];
for(let i = 0; i<99; i++) numbers.push(i)

const form = document.querySelector(".form");
form?.querySelectorAll("button")?.forEach((btn) => {
  if(btn.getAttribute("type") !== "submit")
    btn.setAttribute("type", "button")
})
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector<HTMLInputElement>(".dropdown-input")!;
  if(input.value !== "") alert(`You picked ${input.value}!`)
})

const dropdown = document.querySelector<HTMLDivElement>(".dropdown")
const dropdownList = dropdown?.querySelector(".dropdown-list");
dropdownList?.addEventListener("click", () => {
  dropdownList.closest(".dropdown-list-contianer")?.classList.remove("active");
})

const summonList = dropdown?.querySelector<HTMLButtonElement>(".btn--summonList")
summonList?.addEventListener("click", () => {
  summonList.classList.toggle("active");
  if(summonList.classList.contains("active"))
    dropdownList?.closest(".dropdown-list-container")?.classList.add("active");
  else
    dropdownList?.closest(".dropdown-list-container")?.classList.remove("active");
})

const setList = () => {
  numbers.forEach((_, index) => {
    const dropdownItem = document.createElement("li");
    dropdownItem.classList.add("dropdown-item");
    dropdownItem.innerText = (index+1).toString();
    dropdownItem.addEventListener("click", () => {
      dropdownList?.closest(".dropdown-list-container")?.classList.remove("active");
      summonList?.classList.remove("active")
      const value: string = dropdownItem.innerText;
      const input = dropdown?.querySelector<HTMLInputElement>(".dropdown-input")!;
      input.value = value;
    })
    dropdownList?.appendChild(dropdownItem);
  })
}

setList();