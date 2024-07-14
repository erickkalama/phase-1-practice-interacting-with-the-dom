
document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
  
    let timer = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
  });
  document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
  
    let timer = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
  
    document.getElementById('plus').addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });
  
    document.getElementById('minus').addEventListener('click', () => {
      count--;
      counter.textContent = count;
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let likes = {};
  
    let timer = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
  
    document.getElementById('plus').addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });
  
    document.getElementById('minus').addEventListener('click', () => {
      count--;
      counter.textContent = count;
    });
  
    document.getElementById('heart').addEventListener('click', () => {
      likes[count] = likes[count] ? likes[count] + 1 : 1;
      const likeItem = document.createElement('li');
      likeItem.textContent = `${count} has been liked ${likes[count]} times`;
      document.querySelector('.likes').appendChild(likeItem);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let likes = {};
    let isPaused = false;
    let timer;
  
    function startTimer() {
      timer = setInterval(() => {
        if (!isPaused) {
          count++;
          counter.textContent = count;
        }
      }, 1000);
    }
  
    startTimer();
  
    document.getElementById('plus').addEventListener('click', () => {
      if (!isPaused) {
        count++;
        counter.textContent = count;
      }
    });
  
    document.getElementById('minus').addEventListener('click', () => {
      if (!isPaused) {
        count--;
        counter.textContent = count;
      }
    });
  
    document.getElementById('heart').addEventListener('click', () => {
      if (!isPaused) {
        likes[count] = likes[count] ? likes[count] + 1 : 1;
        const likeItem = document.createElement('li');
        likeItem.textContent = `${count} has been liked ${likes[count]} times`;
        document.querySelector('.likes').appendChild(likeItem);
      }
    });
  
    document.getElementById('pause').addEventListener('click', () => {
      isPaused = !isPaused;
      document.getElementById('pause').textContent = isPaused ? 'resume' : 'pause';
      document.getElementById('plus').disabled = isPaused;
      document.getElementById('minus').disabled = isPaused;
      document.getElementById('heart').disabled = isPaused;
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let likes = {};
    let isPaused = false;
    let timer;
  
    function startTimer() {
      timer = setInterval(() => {
        if (!isPaused) {
          count++;
          counter.textContent = count;
        }
      }, 1000);
    }
  
    startTimer();
  
    document.getElementById('plus').addEventListener('click', () => {
      if (!isPaused) {
        count++;
        counter.textContent = count;
      }
    });
  
    document.getElementById('minus').addEventListener('click', () => {
      if (!isPaused) {
        count--;
        counter.textContent = count;
      }
    });
  
    document.getElementById('heart').addEventListener('click', () => {
      if (!isPaused) {
        likes[count] = likes[count] ? likes[count] + 1 : 1;
        const likeItem = document.createElement('li');
        likeItem.textContent = `${count} has been liked ${likes[count]} times`;
        document.querySelector('.likes').appendChild(likeItem);
      }
    });
  
    document.getElementById('pause').addEventListener('click', () => {
      isPaused = !isPaused;
      document.getElementById('pause').textContent = isPaused ? 'resume' : 'pause';
      document.getElementById('plus').disabled = isPaused;
      document.getElementById('minus').disabled = isPaused;
      document.getElementById('heart').disabled = isPaused;
    });
  
    document.getElementById('comment-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const comment = document.getElementById('comment-input').value;
      const commentItem = document.createElement('p');
      commentItem.textContent = comment;
      document.getElementById('list').appendChild(commentItem);
      document.getElementById('comment-form').reset();
    });
  });
  
  