window.addEventListener("load", solve);

function solve() {
  let postTitle = document.getElementById(`post-title`);
  let postCategory = document.getElementById(`post-category`);
  let addContent = document.getElementById(`post-content`)
  let reviewListElement = document.querySelector(`#review-list`)
  let publishButton = document.getElementById(`publish-btn`)

  function createElement() {
    let _categoryEl = `Category`;
    let _contentEl = `Content`
    let listElementInReview = document.createElement(`li`);
    listElementInReview.classList.add(`rpost`)
    listElementInReview.innerHTML = `<article>
    <h4>'${postTitle.value}'</h4>
    <p>${_categoryEl}: ${postCategory.value}</p>
    <p>${_contentEl}: ${addContent.value}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;
    reviewListElement.appendChild(listElementInReview)
    // let editButton = document.getElementsByClassName(`action-btn edit`);
    postTitle.value =
      postCategory.value = ''
    addContent.value = ''
  }
  publishButton.addEventListener(`click`, (e) => {
    createElement()
    let editbutton = reviewListElement.querySelectorAll(`button`)[0]
    let approveButton = reviewListElement.querySelectorAll(`button`)[1]

    editbutton.addEventListener(`click`, (e) => {

      let forRemoval = e.target.parentElement;
      let titleInput = e.target.parentElement.querySelector(`h4`);
      let categoryInput = e.target.parentElement.querySelectorAll(`p`)[0]
      let contentInput = e.target.parentElement.querySelectorAll(`p`)[1]
      categoryInput = (String(categoryInput.innerText))
      contentInput = (String(contentInput.innerText))

      postTitle.value = titleInput.textContent;
      postCategory.value = categoryInput.split(`: `)[1]
      addContent.value = contentInput.split(`: `)[1]
      reviewListElement.removeChild(forRemoval)

    })

    approveButton.addEventListener(`click`, (e) => {
      let publishList = document.getElementById(`published-list`);
      let append = e.target.parentElement;
      console.log(e.target.parentElement);
      let button1 = append.querySelectorAll(`button`)[0]
      let button2 = append.querySelectorAll(`button`)[1]

      append.removeChild(button1)
      append.removeChild(button2)

      publishList.appendChild(append)
      const clearButton = document.getElementById(`clear-btn`)

      clearButton.addEventListener(`click`, (e) => {
        let publishList = document.getElementById(`published-list`);
        let rPost = document.querySelector(`.rpost`)
        console.log(rPost);
        publishList.removeChild(rPost)
      })

    })

  })
}
