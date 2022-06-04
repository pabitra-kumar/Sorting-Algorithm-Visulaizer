import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Bars } from './components/Bars';
function App() {
  let newArray = [];
  let j = 1
  for (let i = 0; i < 50; i++) {
    let hei = Math.floor(Math.random() * 69 + 1)
    let el = { key: j, ht: hei, color: "blue" }
    newArray.push(el);
    j++;
  }
  // Variable Declaration and Initialization
  let [array, setArray] = useState(newArray);
  // const [method, setMethod] = useState(BubbleSort(array));
  const nwArray = () => {
    setArray(
      array.filter((e) => {
        return (
          e.ht = Math.floor(Math.random() * 69 + 1)
        )
      })
    )
    setArray(
      array.filter((e) => {
        return (
          e.color = "blue"
        )
      })
    )
    console.log("My New Array is",array);
  }
  function swap(index1, index2) {
    let temp = array[index1].ht;
    updateht(array[index2].ht,index1)
    updateht(temp,index2)
    
  }
  const updateColor = (color, index) => {
    setArray(array.filter((e,i)=>{
      if(i===index)
      {
        return e.color = color;
      }
      else{
        return e
      }
    }));
  };
  const updateht = (ht, index) => {
    setArray(array.filter((e,i)=>{
      if(i===index)
      {
        return e.ht = ht;
      }
      else{
        return e
      }
    }));
  };
  function BubbleSort() {
    console.log("I am Inside Bubble Sort")
    let n = array.length
    for (let i = 0; i < n; i++) {
      for (let j = 1; j < n - i; j++) {
        updateColor("red",j)
        updateColor("red",j-1)

        if (array[j].ht < array[j - 1].ht) {
          setTimeout(swap(j,j-1), 40);
        }

        updateColor("blue",j)
        updateColor("blue",j-1)

      }
      updateColor("green",n-i-1)

    }
    console.log("Updated Array is",array);
    }
    function InsertionSort(){
      console.log("I am inside Insertion Sort")
      let n=array.length
      updateColor("green",0);
      for(let i=1;i<n;i++)
      {
        for(let j=i;j>0;j--)
        {
          updateColor("red",j);
          updateColor("red",j-1)
          if(array[j].ht<array[j-1].ht)
          {
            swap(j,j-1);
            updateColor("green",j)
            updateColor("blue",j-1)
          }
          else
          {
            updateColor("green",j)
            updateColor("green",j-1)
            break;
          }
          if(j==1)
          {
            updateColor("green",j-1)
          }
        }
      }
      console.log("Updated Array is ",array)
    }
    function SelectionSort(){
      let n = array.length
      for(let i=1;i<n;i++)
      {
        let s=array[i-1].ht
        let index=i-1;
        for(let j=i;j<n;j++)
        {
          if(array[j].ht<s)
          {
            s=array[j].ht
            index=j;
          }
        }
        updateColor("red",i-1)
        updateColor("red",index)
        swap(i-1,index)
        updateColor("blue",index)
        updateColor("green",i-1)
        if(i==n-1)
        {
          updateColor("green",n-1);
        }
      }
    }
  let assignMethod = () => {
    let drop =document.getElementById("DropDown").value
    if(drop==="Bubble")
    {
      BubbleSort()
    }
    else if(drop==="Insertion")
    {
      InsertionSort()
    }
    else if(drop==="Selection")
    {
      SelectionSort();
    }
  }
  return (
    <>
      <Header asMethod={assignMethod} nwArray={nwArray} />
      <Bars array={array} />
    </>
  );
}

export default App;
