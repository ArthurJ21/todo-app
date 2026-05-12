document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.querySelector('.sidebar__add-task');
  const todoColumn = document.getElementById('todoColumn');
  const badgeCount = todoColumn.querySelector('.badge');

  function updateBadgeCount() {
    const cards = todoColumn.querySelectorAll('.task-card');
    badgeCount.textContent = cards.length;
  }

  function createTaskCard(title, description) {
    const card = document.createElement('div');
    card.className = 'task-card task-card--new';

    const label = document.createElement('span');
    label.className = 'task-label task-label--blue';
    label.textContent = 'New';

    const heading = document.createElement('h4');
    heading.textContent = title;

    const text = document.createElement('p');
    text.textContent = description;

    const footer = document.createElement('div');
    footer.className = 'task-footer';
    footer.innerHTML = '<span>0</span><span>Today</span>';

    card.append(label, heading, text, footer);
    return card;
  }

  function onAddTaskClick() {
    const title = window.prompt('Enter a task title:');
    if (!title) return;

    const description = window.prompt('Enter task details (optional):') || 'No details provided.';
    const taskCard = createTaskCard(title, description);

    todoColumn.appendChild(taskCard);
    updateBadgeCount();
  }

  if (addTaskButton) {
    addTaskButton.addEventListener('click', onAddTaskClick);
  }
});
