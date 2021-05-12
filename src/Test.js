import React from 'react'
import ReactDOM from 'react-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'



const Test = (props)=>{
    
    const [count,setCount] = useState(0);
    const [post,setPost] = useState(0);
    const[dis,setDis] =useState(false);
    const hello = true;
    let display =false;

    useEffect(()=>{
        if(count>0){
            document.title = `You clicked ${count} times`
        }

       axios.get('http://localhost:5000/api/posts')
       .then(res=>{
           setPost({post:res})
       })

       console.log(post)
       
        
    },[])

    const show = ()=>{
        setCount(count+1)
        if(count%2==0){
            // alert(count%2==0)
            setDis({dis:true})
        }else{
            setDis(dis==false)
            // alert(count%2==0)
        }
      
       
    }

    const hide = ()=>{
        setDis(dis==false)
    }

    const onclick = ()=>{
       setCount(count+1)
    //    document.title = `You clicked ${count} times`
    }

    return(
        <div>
            <p>Hey it's test</p>
            <p>You clicked {count} times</p>

            <button onClick={onclick}>Click Me</button>

           <p>hello {post ? 'We have posts' : 'no'}</p>

           <button className="btn btn-primary" onDoubleClick={hide} onClick={show}>{dis?'Hide':'Show text'}</button>

            {dis ? (
                <div>
                   <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae consequuntur quod veritatis molestias quas voluptatum debitis mollitia autem possimus doloremque, iste at, enim corrupti iure reiciendis, fugiat quia magni nemo? Voluptates ut quaerat fugiat sed sunt voluptatum, alias a inventore recusandae aliquid! Error animi odio consequuntur nemo in provident magnam, tempora labore? Dignissimos quo vitae suscipit, amet aspernatur unde quibusdam fugit voluptatem? Possimus similique distinctio molestias quidem assumenda tenetur excepturi fuga ut repellat nihil voluptatem odit ullam, magnam sapiente quam ipsa animi facilis! Neque, autem numquam aut repudiandae repellendus natus molestias incidunt iste et architecto quisquam inventore esse minus velit. Reiciendis quibusdam recusandae fuga laudantium culpa nobis praesentium id ullam ipsam doloribus, officia quae dolores dolorum saepe eveniet at architecto vero omnis eligendi cum unde. Veniam quos autem ab in dicta debitis eveniet delectus praesentium obcaecati laudantium. Animi mollitia omnis amet ratione maxime perferendis enim culpa atque nostrum veritatis ab consequuntur voluptatem similique nisi excepturi libero facilis, molestiae ut iure in! Fugit asperiores iste itaque velit dicta, nobis expedita suscipit est recusandae, sint nostrum repellendus commodi, quidem obcaecati! Non ex temporibus pariatur cumque officia dolor adipisci similique voluptatem cupiditate, totam deleniti necessitatibus neque a repudiandae eum laboriosam et aut facere.
                   </p>
                    
                </div>
            ): '' }
          

        </div>
    )
}

export default Test;