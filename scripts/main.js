            <!-- Game Menu -->
const play = document.getElementById('gameMenuPlay');
let menu = document.querySelector('.game-menu');
let playMode = document.querySelector('.game-mode');
play.addEventListener('click',()=>{
    playMode.style.display='block';
    menu.style.display='none';
    createTask(arrOfTask);
    createGameCube(countCubes, arrOfTask);
});

            <!-- Game Logic -->
let arrOfTask = ['q','w','e','r','t','y'];
    taskMenu = document.getElementById('taskMenu'),
    playMenu = document.getElementById('playMenu'),
    countCubes = 6;
const countElementsOfTask = arrOfTask.length,
      win = document.getElementById('win');

function createGameCube(numberOfCubes, arr){

    for(let i=0; i<numberOfCubes; i++){
        let randItem = Math.floor(Math.random()*countElementsOfTask);
        let gameCube = createCube(arr[randItem]);

        gameCube.addEventListener('click', ()=>{
            const taskList = taskMenu.querySelectorAll('.cube');
            for (let task of taskList) {
                if (task.innerText === gameCube.innerText &&
                    task.style.backgroundColor != 'gray'){

                    if(playMenu.children.length == 1){
                       return result('Win');
                    }

                    return [gameCube.remove(),
                            task.style.backgroundColor = 'gray'];
                }
            }
        });
    gameCube.classList.add('falling');
    playMenu.append(gameCube);
    }
}

function createTask(arr){
    for(let i=0; i<6; i++){
        let randItem = Math.floor(Math.random()*arr.length);
        taskMenu.append(createCube(arr[randItem]));
    }
}

function createCube(itemofTask){
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.innerHTML = itemofTask;
    return cube;
}

let countClick = 0;
const lose = document.querySelector('.lose');
document.getElementById('reroll').addEventListener('click',()=>{
    countClick++;
    if(countClick > 0 && countClick <5){
        let remainingCubes = playMenu.querySelectorAll('.cube');
        createGameCube(remainingCubes.length, arrOfTask);

        for(let cube of remainingCubes){
            cube.remove();
        }
    } else {
        const exit = document.getElementById('exit');
        exit.addEventListener('click',()=>{
            lose.style.display='none';
            menu.style.display='block';
            countClick = 0;
            taskMenu.innerHTML='';
            playMenu.innerHTML='';
        });
        result('Lose');
    }
});

function result(result){
    win.innerHTML = result;
    playMode.style.display='none';
    lose.style.display='block';
}


