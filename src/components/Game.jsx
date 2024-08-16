import React, { useRef, useState } from 'react'
import circle_icon from './Assets/circle.png'
import cross_icon from './Assets/cross1.png'
import './Game.css'
import Button from './Button';
let data = ["","","","","","","","",""];
const checkData = [
    [0 ,1 ,2],
    [3 ,4 ,5],
    [6 ,7 ,8],
    [0 ,3 ,6],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [0 ,4 ,8],
    [2 ,4 ,6],
]
const Game = () => {
    let [count ,setCount] =useState(0);
    let  [lock ,setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 =  useRef(null);
    let box2 =  useRef(null);
    let box3 =  useRef(null);
    let box4 =  useRef(null);
    let box5 =  useRef(null);
    let box6 =  useRef(null);
    let box7 =  useRef(null);
    let box8 =  useRef(null);
    let box9 =  useRef(null);
    let boxArr = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
    const toggle = (e , num)=>{
        
        if(lock){
            return 0;
        }    
        if(count % 2 === 0){
            e.target.innerHTML = `<img src='${cross_icon}'>`
            data[num] = 'x';
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`
            data[num] = 'o';
            setCount(++count);
        }
        if(count === 9){
            titleRef.current.innerHTML = `Match Draw <span> Reset The Game  </span>`
        }
        console.log(count)
        checkWin()
    }
    const checkWin =() =>{
        for(let i = 0 ; i < checkData.length; i++ ){
            let [a , b, c] = checkData[i]; 
            if(data[a] === data[b] && data[b] === data[c] && data[c] !==  "" ){
                won(data[a]);
            }
        }
    }
    const won = (winner) =>{
        setLock(true);
        console.log(winner)
        if(winner === "x"){
            titleRef.current.innerHTML = `Congratulation : <img src='${cross_icon}'> win`
            console.log(titleRef)
            console.log("x wala jeeta")
        }
        if(winner === 'o'){
            titleRef.current.innerHTML = `Congratulation : <img src='${circle_icon}'> win`
            console.log(titleRef)
            console.log("o wala jeeta")

        }
    }
    const resetHandler = () =>{
        // alert("hnji")
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = `<h1>TIC TAC TOE GAME IN<span> REACT</span> </h1>`
        boxArr.map((e)=>{
            e.current.innerHTML = "";
        })
        setCount(0);
    }
    return (
    <div className='wrapper'>
        <h1 ref={titleRef} className='heading text-[45px] text-white font-bold '>TIC TAC TOE GAME IN<span> REACT</span> </h1>
        <div className='board'>
            <div className="row1 row">
                <div className="boxes " onClick={(e)=>{toggle(e , 0)} } ref={box1}  ></div>
                <div className="boxes " onClick={(e) => {toggle(e,1)} } ref={box2}  ></div>
                <div className="boxes " onClick={(e) => {toggle(e,2)} } ref={box3} ></div>
            </div>
            <div className="row2 row">
                <div className="boxes " onClick={(e) => {toggle(e,3)} } ref={box4} ></div>
                <div className="boxes " onClick={(e) => {toggle(e,4)} } ref={box5} ></div>
                <div className="boxes " onClick={(e) => {toggle(e,5)} } ref={box6} ></div>
            </div>
            <div className="row3 row">
                <div className="boxes " onClick={(e) => {toggle(e,6)} } ref={box7} ></div>
                <div className="boxes " onClick={(e) => {toggle(e,7)} } ref={box8} ></div>
                <div className="boxes " onClick={(e) => {toggle(e,8)} } ref={box9} ></div>
            </div>
        </div>
        <Button onClick={resetHandler} />
    </div>
  )
}

export default Game











