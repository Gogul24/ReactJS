function RenderList(){
    const fruits = [{name:'apple',id:22},
                    {name:'watermelon',id:54},
                    {name:'banana',id:11},
                    {name:'orange',id:99}];
    fruits.sort((a,b)=>a.name.localeCompare(b.name)); //sort Alphabetical order, if want to do reverse sort do viseversa
    //friuts.sort((a,b)=>a.id - b.id) //this is for numeric
    const listitems = fruits.map(fruit => <li>{fruit.id} : &nbsp; {fruit.name}</li> )
    return(<ul>{listitems}</ul>)
}
export default RenderList;