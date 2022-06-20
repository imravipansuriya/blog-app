import React, { useEffect, useState } from 'react'


function Blog() {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then((res) => {
        return res.json()
      }).then((result) => {
        setData(result)
      })
  }, [])

  return (
    <>
      <div className='blog_wrp'>
        <div className='blog-wrp'>
          <div className='container'>
            <div className='blog-main'>
              {
                data.map((item) => {
                  let d = new Date(item.date);
                  item.date = d.toString().split(" ")[1] + " " + d.toString().split(" ")[2] + "," + d.toString().split(" ")[3]
                  return <div className='blog-box'>
                    <div className='blog-box-img'>
                      <img src={item.thumbnail.large} alt="Blog_Image" />
                      <span className='img-hover'>Learn More</span>
                    </div>
                    <div className='blog-box-desc'>
                      <div className='dots-wrp'>
                        <span className='blue-dots'></span>
                        <span className='yallow-dots'></span>
                      </div>
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                      <div className='blog-box-widget'>
                        <span>{item.author.name} - {item.author.role}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                })

              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
