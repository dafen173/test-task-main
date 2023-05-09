const element = document.querySelector('form');
const commentArea = document.querySelector('#userComment');
const commentsContainer = document.querySelector('.comments_face');

element.addEventListener('submit', event => {
  event.preventDefault();

  let comment = document.createElement('div')
  comment.className = 'comments'

  comment.innerHTML = `
      <div class="profile">
        <img src="./assets/img/anonymous-user.png"></div>
      <div class="comment-content">
        <p class="name">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Usuário anônimo</font>
          </font>
        </p>
        <p>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">${commentArea.value}</font>
          </font>
        </p>
      </div>
      <div class="clr"></div>
      <div class="comment-status">
        <span>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Curte·comente</font>
          </font>
          <img src="./assets/img/like.png" width="15px" height="15px" onClick='likeHandler()'>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">0</font>
          </font>
        </span>
        <small>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">·</font>
          </font>
          <u>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">0 minutos antes</font>
            </font>
          </u>
        </small>
      </div>
  `
  commentsContainer.insertBefore(comment, commentsContainer.children[1]);

  commentArea.value = '';
});

const questions = document.querySelector('.q-container');
let answersArr = []
questions.addEventListener('click', function(event) {

  if (event.target.classList.contains('survey_button')) {
    answersArr.push(event.target.childNodes[1].childNodes[1].textContent);
  } else {
    answersArr.push(event.target.textContent);
  }
});

function okHandler () {
  console.log('Respostas do usuário:');
  answersArr.forEach(x => console.log(x));
}
