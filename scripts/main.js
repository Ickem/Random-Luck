
let arrOfTask = ['q','w','e','r','t','y'];
const countElementsOfTask = arrOfTask.length;
let taskMenu = document.getElementById('taskMenu'),
    playMenu = document.getElementById('playMenu'),
    countCubes = 6;

function createGameCube(numberOfCubes, arr){

    for(let i=0; i<numberOfCubes; i++){
        let randItem = Math.floor(Math.random()*countElementsOfTask);
        let gameCube = createCube(arr[randItem]);

        gameCube.addEventListener('click', ()=>{
            const taskList = taskMenu.querySelectorAll('.cube');
            for(let task of taskList){
                if(task.innerText === gameCube.innerText &&
                    task.style.backgroundColor !='gray'){
                    return [gameCube.remove(),
                            task.style.backgroundColor ='gray'];
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
document.getElementById('reroll').addEventListener('click',()=>{
    countClick++;
    if(countClick > 0 && countClick <3){
        let remainingCubes = playMenu.querySelectorAll('.cube');
        createGameCube(remainingCubes.length, arrOfTask);

        for(let cube of remainingCubes){
            cube.remove();
        }
    } else console.log('You lose');
});

createTask(arrOfTask);
createGameCube(countCubes, arrOfTask);
