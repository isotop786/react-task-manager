import Button from './Button'

const Header = (props)=>
{

    const onClick = ()=>{
        console.log('clicked the utotn')
    }


    return(
            <header className="header">
                <h1>{props.title}</h1>
                <Button color='green' text='Add Task' onClick={onClick}/>
            </header>
        )
    
}






export default Header;