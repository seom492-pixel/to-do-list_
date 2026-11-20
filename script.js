
document.getElementById("title").textContent =
      "My To-Do List";

function addTodo() {

  // 1. 입력값 가져오기
  let input = document.querySelector("#todoInput");
  let text = input.value.trim();

  // 2. 빈 입력 확인
  if (text === "") {
    alert("할 일을 입력하세요.");
    return;
  }

  // 3. 새로운 li 요소 생성
  let newItem = document.createElement("li");

  // 4. 텍스트 요소 생성
  let todoText = document.createElement("span");

  // 5. 텍스트 지정
  todoText.textContent = text;

  // 6. 텍스트 클릭 시 완료 상태 변경
  todoText.addEventListener("click", function() {
    todoText.classList.toggle("completed");

    // 개수 갱신
    updateCount();
  });

  // 7. 삭제 버튼 생성
  let deleteButton = document.createElement("button");

  deleteButton.textContent = "삭제";

  // 8. 삭제 버튼 클릭 시 해당 할 일 삭제
  deleteButton.addEventListener("click", function() {
    newItem.remove();

    // 개수 갱신
    updateCount();
  });

  // 9. li에 텍스트와 삭제 버튼 추가
  newItem.append(todoText);
  newItem.append(deleteButton);

  // 10. 목록에 추가
  document.querySelector("#todoList").append(newItem);

  // 11. 입력창 초기화
  input.value = "";

  // 12. 개수 갱신
  updateCount();
}


// 할 일 개수 계산 함수
function updateCount() {

  // 전체 할 일 목록 가져오기
  let todoItems = document.querySelectorAll("#todoList li");

  // 전체 개수
  let totalCount = todoItems.length;

  // 완료 개수
  let completedCount = 0;

  // 반복문으로 완료된 할 일 확인
  for (let i = 0; i < todoItems.length; i++) {

    if (todoItems[i].querySelector(".completed")) {
      completedCount++;
    }

  }

  // 화면에 개수 표시
  document.querySelector("#todoCount").textContent =
    "전체 " + totalCount + "개 / 완료 " + completedCount + "개";

}


// 처음 화면이 실행될 때 개수 계산
updateCount();


// 기존 HTML에 미리 작성된 할 일에도 완료 기능과 삭제 기능 추가
let existingItems = document.querySelectorAll("#todoList li");

for (let i = 0; i < existingItems.length; i++) {

  // 기존 할 일 텍스트를 span으로 감싸기
  let todoText = document.createElement("span");

  todoText.textContent = existingItems[i].textContent;

  // 완료 기능
  todoText.addEventListener("click", function() {
    todoText.classList.toggle("completed");
    updateCount();
  });

  // 삭제 버튼 생성
  let deleteButton = document.createElement("button");

  deleteButton.textContent = "삭제";

  // 삭제 기능
  deleteButton.addEventListener("click", function() {
    existingItems[i].remove();
    updateCount();
  });

  // 기존 li 내용 정리 후 다시 추가
  existingItems[i].textContent = "";

  existingItems[i].append(todoText);
  existingItems[i].append(deleteButton);

}
