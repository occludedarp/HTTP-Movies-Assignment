import React, {useEffect, useState, useParams} from 'react';

const initialMovie = {
  id: " ",
  title: " ",
  director: " ",
  metascore: " ",
  stars: " "
}

const UpdateMovie = (props) => {
  const [movie, SetMovie] = useState(initialMovie)
  const { id }= useParams()

  return(
    <div>
      <form>
        <input 

        />

        <input 

        />
      </form>
    </div>
  )
}

export default UpdateMovie;