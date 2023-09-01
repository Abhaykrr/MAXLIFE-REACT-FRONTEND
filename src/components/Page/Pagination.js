import React from 'react'

// Declare this varibales
// const [pages,setPages] = useState()
// const [currpage,setCurrpage] = useState(0)
// const pagesize = 6;


//setPages(response.data.totalPages-1)
// setAccountData(response.data.content)

// How to call 
// <Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/>

const Pagination = ({ pages, currpage ,setCurrpage }) => {

    const increasePage =(e)=>{
      // console.log(currpage)
        e.preventDefault()
        currpage+=1
        if(currpage>pages) currpage =0
        setCurrpage(currpage)

    }

    const decereasePage =(e)=>{
        e.preventDefault()
        currpage-=1
        if(currpage<0) currpage = 0
        setCurrpage(currpage)
    }

  return (
      <nav  className="text-center">
          <ul class="pagination">
            <li class="page-item"><a class="page-link"  href='' onClick={decereasePage}>Previous</a></li>
            <li class="page-item"><a class="page-link"  >{currpage+1}/{pages+1}</a></li>
            <li class="page-item"><a class="page-link" href='' onClick={increasePage}>Next</a></li>
          </ul>
        </nav>
  )
}

export default Pagination
