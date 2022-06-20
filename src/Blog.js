import React, { useEffect, useState } from 'react'


function Blog() {

  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false);
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then((res) => {
        return res.json()
      }).then((result) => {
        setData(result)
      })
  }

  return (
    <>
      <div className='blog_wrp'>
        <div className='blog-wrp'>
          <div className='container'>
            <div className='blog-main'>
              {
                data.map((item, index) => {
                  let d = new Date(item.date);
                  item.date = d.toString().split(" ")[1] + " " + d.toString().split(" ")[2] + "," + d.toString().split(" ")[3]
                  return <div className='blog-box'>
                    <div className='blog-box-img' onClick={() => { setFlag(true); setIndex(index) }}>
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
            {flag ? ( <div className='model-wpr'>
              <div className='model-overlay'>
               <div className='model'>
              <span className='close-icon' onClick={() => { setFlag(false) }}>X</span>
              {
                data.map((item, index) => {
                  return Index === index ? (<div>
                    <div className='model-image'>
                      <img src={item.thumbnail.large} alt="Blog_Image" />
                    </div>
                    <div className='model-detail'>
                      <h2 className='model-title'>{item.title}</h2>
                      <p className='text-detail'>{item.content}</p>
                      <div className='model-bottom'>
                      <span className='avatar'>
                        <img src={item.author.avatar} alt='author'/>
                      </span>
                      <span className='author-name'>{item.author.name} - {item.author.role}</span>
                    </div>
                    </div>
                 
                  </div>) : null
                })}
            </div> 
            </div>
            </div>) : null}
          </div>
        </div>
      </div>

    </>
  );
}
export default Blog;
