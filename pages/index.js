import { useState, useEffect } from "react"
import { useCurrentUser } from 'hooks/index'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])
import { CSVLink } from 'react-csv'
import ProgressButton from 'react-progress-button'


import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined'
// import { motion } from 'framer-motion'


import Auth from "layouts/Auth.js"
import Feature from "components/Common/Feature.js"
import Service from "components/Common/Service.js"
import Keystep from "components/Common/Keystep.js"
import req from '../utils/request'


import Logo from "assets/img/logo.png"
import ge from 'assets/img/flags/de.jpg'
import human1 from 'assets/img/features-1.png'
import human2 from 'assets/img/features-2.png'
import human3 from 'assets/img/features-3.png'
import search from 'variables/search.js'


const Home = () =>
{
  //useEffects
  useEffect(() =>
  {
    //geting all flag images from folder
    function importAll(r)
    {
      return r.keys().map(r);
    }
    const Flags = importAll(require.context('assets/img/flags', false, /\.(jpg)$/));
    setFlags(Flags)
    let testimonialImgs = importAll(require.context('assets/img/testimonials', false, /\.(jpg)$/))
    const client = importAll(require.context('assets/img/clients', false, /\.(png)$/))
    setTestimonImgs(testimonialImgs)
    const allselArray = []
    searches.map((item, i) =>
    {
      allselArray.push(false)
    })
    setAllSelectbyKey(allselArray)
    setClients(client)
  }, [])

  useEffect(() =>
  {
    let totalcount = 0
    let countnum = 0
    searches.map(search =>
    {
      totalcount += search[0].length
      countnum += search[0].filter(it => it.value === true).length
    })
    setTotal(totalcount)
    setCount(countnum)
  })

  //variables
  const features = [
    {
      title: 'Multiple Searchs at Once',
      image: human1,
      description: 'Enter multiple search terms / phrases in the search field. Get your results in just one go! No need to make thousands of searches!',
      details: [
        ' With Keyword Tech you can type more than one search word in the search bar - even if they relate to different products.',
        'All keywords are shown in different blocks. This makes it easier for you to analyze them.',
        'Just select the relevant keywords for your search and export them to a format you want - whether .txt, .csv, .sql or. xslx.'
      ],
      leftPosition: true
    },
    {
      title: 'No More Wasting Time',
      image: human2,
      description: `Go ahead and compare: Keyword Tech is 50% faster than any other keyword tool.`,
      details: [
        `Keywords are not saved. That means nothing is from our servers. We're bringing them out live – so you will have the latest version!`],
      leftPosition: false
    },
    {
      title: 'More Results and Latest Keywords',
      image: human3,
      description: 'Keyword Tech doesn’t only focus on speed but also on real-time results. For your searches, it is essential that you get the latest and effective keywords.',
      details: [
        ' Live keywords for your Amazon products that increases your sales',
        `Searching methods are complex and accurate which doesn't rely on stored keyword information.`,
        ' You will get more results than any other keyword tool. It is free to test!'
      ],
      leftPosition: true
    }
  ]

  const services = [
    {
      title: 'Multiple Search',
      icon: 'fa-dribbble',
      description: 'You can enter multiple search terms or search phrases by separating them with a comma or the Enter key. So, now you can reach out more than one search in one go. Your keywords are listed separated and are ready to copy.'
    },
    {
      title: 'Faster Search',
      icon: 'fa-file-text-o',
      description: 'Time is money. Therefore, our focus is delivering your results faster. Our keyword search method is two times faster compared to other tools. Greetings from Speedy Gonzales!'
    },
    {
      title: 'More Results',
      icon: 'fa-tachometer',
      description: 'We provide more keywords to you because our searching algorithm is more detailed than others searching methods. As a result of that, your results are live, so that provides you with the latest keywords.'
    },
    {
      title: 'Export',
      icon: 'fa-database',
      description: 'Export your Amazon keywords in any format you want! No matter whether Excel, JSON or something else. Export all at once!'
    },
    {
      title: 'Unlimited Search',
      icon: 'fa-dribbble',
      description: `You don't have to limit yourself with certain amount of numbers.You have unlimited search inquiries.Start finding easily without worrying about how many search queries you still have left.`
    },
    {
      title: 'Amazon Special',
      icon: 'fa-file-text-o',
      description: 'For you, we only focus on the Amazon keywords. You can even further specialize your search query. To do, select an Amazon category. You will get the latest and most relevant keywords led by Amazon.'
    },
    {
      title: 'Company Friendly',
      icon: 'fa-tachometer',
      description: 'You can easily invite other employees to use Keyword Tech by email. Payments and control are managed via one account. Book the unlimited annual subscription now!'
    },
    {
      title: 'Pricing',
      icon: 'fa-database',
      description: 'All in one payment, no additional fees and you can cancel it at any time. We offer our users quality at competitive prices in this sector. Make your choice now among the offers!'
    },

  ]

  const steps = [
    {
      number: '01',
      title: 'What is a Keyword',
      description: 'A keyword is text for search. It can be just one word or a combination of several words, numbers or characters.'
    },
    {
      number: '02',
      title: 'Why Keywords',
      description: 'With keywords you get to the search terms or search phrases that are used by real customers (buyers) to search for products on Amazon.'
    },
    {
      number: '03',
      title: 'Effects of Keywords',
      description: 'With the right Amazon keywords, you can generate more traffic, thus more sales. Buyers use the keywords to find the way to your product.'
    },
    {
      number: '04',
      title: 'Where Can I Find Keywords',
      description: 'You can get to the current and effective keywords quickly, easily and simply using our Keyword Tech tool.'
    },
    {
      number: '05',
      title: 'Keywords for Higher Listing',
      description: 'For more visibility and sales, it is essential that you optimize your product title, bullet points and product description with the help of many valuable keywords.'
    },
    {
      number: '06',
      title: 'Effective Keywords',
      description: 'Effective and fitting keywords you can choose with our search function. No doubt, your product will be listed higher on Amazon.'
    },
  ]

  const testimonials = [
    {
      description: 'Thanks to Keyword Tech, I have increased my sales significantly. I am very happy with this tool. This showed me the importance of finding correct keywords.',
      detail1: '......',
      detail2: '....&....'
    },
    {
      description: ` Multiple search possible ..., very fast ..., live data ..., export option ... inexpensive ... in ONE. I don't think I have to say more.It explains itself.BEST!`,
      detail1: '......',
      detail2: '....'
    },
    {
      description: 'With multiple search, we are going sooo so fast! It saves a lot of time. Just awesome. It is now impossible to imagine life without it. Unbelievable how much time we have wasted before. ...',
      detail1: '......',
      detail2: '....'
    },
    {
      description: 'I can say that we are familiar with almost all of the tools. Keyword Tech is actually the fastest. Faster and gives even more keywords.',
      detail1: '......',
      detail2: '....'
    },
    {
      description: 'Keyword Tech shows once again how important it is to specialize in one area. This one only focuses to Amazon keywords. We achieve significantly better keywords and are reaping the rest of other sellers.',
      detail1: '......',
      detail2: '....'
    },
  ]

  const faqs = [
    {
      title: 'What is Keyword Tech?',
      description: 'Keyword Tech is a keyword search engine specialized on Amazon.'
    },
    {
      title: 'Does the tool work with multiple Amazon marketplaces?',
      description: 'Yes. We support US, CA, and all EU marketplaces. Each marketplace has its own search structure.'
    },
    {
      title: 'Do I get a VAT invoice?',
      description: 'Yes. Every month you will receive a VAT invoice in PDF format by email.'
    },
    {
      title: 'Which payment methods are supported?',
      description: 'We accept credit cards and PayPal. The fees are charged monthly.'
    },
    {
      title: 'Does Keyword Tech support Amazon categories?',
      description: 'Yes, Keyword Tech fully supports all Amazon categories. Keyword suggestions are determined based on the category you selected.'
    },
    {
      title: 'Are search volumes shown for keyword suggestions?',
      description: `Amazon's auto-complete services do not provide search volume information for keyword suggestions. For this reason we do not offer search volume as this would be misleading and, in most cases, completely inaccurate.`
    },
    {
      title: 'Are my datas in safe?',
      description: 'We only store the information required for the reports and nothing more. We will never analyze, sell, distribute or otherwise use your data than to operate our software.'
    },
    {
      title: 'How can I change my password?',
      description: 'Enter your email address on the login page and click on "Forgot your password?" click. You will then be sent an email so that you can reset your password.'
    },
    {
      title: 'How can I cancel my subscription?',
      description: 'You can cancel your subscription at any time by the end of the month of cancellation by writing us a short email (MAILMAILMAILMAILMAIL). All data will be completely deleted from our servers after deactivating the account.'
    },
  ]


  //useStates
  const [user, { mutate }] = useCurrentUser();
  const [flagList, setFlagList] = useState(false)
  const [flags, setFlags] = useState([])
  const [flag, setFlag] = useState(ge)
  const [keyword, setKeyword] = useState('')
  const [searchType, setSearchType] = useState('0')
  const [searchDetail, setSearchDetail] = useState(false)
  const [searches, setSearches] = useState(search)
  const [allSelect, setAllSelect] = useState(false)
  const [allSelectbyKey, setAllSelectbyKey] = useState([])
  const [testimonImgs, setTestimonImgs] = useState([])
  const [clients, setClients] = useState([])
  const [searchTimes, setSearchTimes] = useState(0)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [searchArray, setSearchArray] = useState([])
  const [searchArr, setSearchArr] = useState([])

  //functions
  const flagListShow = () =>
  {
    setFlagList(!flagList)
  }

  const selectFlag = (flag) =>
  {
    setFlag(flag)
    setFlagList(false)
  }

  const inputChange = (e) =>
  {
    let value = e.target.value
    switch (e.target.name)
    {
      case 'keyword':
        setKeyword(value)
        break;
      case 'searchType':
        setSearchType(value)
        break;

      default:
        break;
    }
  }

  const keywordkeydown = (e) =>
  {
    if (e.keyCode === 13)
    {
      e.preventDefault()
      setKeyword(keyword + ', ')
    }
  }

  const selectAllperKey = (checked, i) =>
  {
    let pop = [...searches]
    pop[i][0] = pop[i][0].map((item) => ({
      ...item,
      value: checked
    }));
    setSearches(pop)
    let popsel = allSelectbyKey
    popsel[i] = checked
    setAllSelectbyKey(popsel)
    console.log(popsel, checked, i)
  }

  const SelectOne = (e, i, j) =>
  {
    const value = e.target.checked

    let pop = [...searches]
    pop[i][0][j].value = value
    setSearches(pop)
  }

  const selectAll = () =>
  {
    searches.map((search, i) =>
    {
      selectAllperKey(!allSelect, i)
    })
    setAllSelect(!allSelect)
  }

  const searchFuction = async () =>
  {
    // let array = keyword.replace(/ /g, '').split(',').filter(item => item !== '')
    let array = keyword.split(',').filter(item => item !== ' ')
    console.log(array)
    setSearchArr(array)
    let testjson = []

    const condition = (flag) =>
    {
      testjson = [];
      for (let k = 0; k < array.length; k++)
      {
        if (flag && searchArr.includes(array[k]))
        {
          console.log(`${array[k]} already searched...`);
          continue;
        }
        console.log(`${array[k]} searching...`);
        // let data = req([{
        //   "key": array[k],
        //   "category": "aps",
        //   "mkt": "4",
        //   "type": "ten"
        // }]);
        if (flag)
        {
          testjson.push(req([{
            "key": array[k],
            "category": "aps",
            "mkt": "4",
            "type": "ten"
          }]))
        } else
        {
          testjson.push(req([{
            "key": array[k],
            "category": "aps",
            "mkt": "4",
            "type": "all"
          }]))
        }
        // if (JSON.stringify(searchArray).includes(JSON.stringify(data))) {
        //   // console.log('---1---')
        //   testjson.push(req([{
        //     "key": array[k],
        //     "category": "aps",
        //     "mkt": "4",
        //     "type": "all"
        //   }]))
        // } else if (JSON.stringify(searchArray).includes(JSON.stringify(data1))) {
        // } else {
        //   // console.log("---2---")
        //   testjson.push(req([{
        //     "key": array[k],
        //     "category": "aps",
        //     "mkt": "4",
        //     "type": "ten"
        //   }]))
        // }
      }
    }
    await condition(true)
    setSearchArray(testjson)
    let searchArray1 = []
    console.log(testjson, '----t---')
    await Promise.all(testjson)
      .then(async function (result)
      {
        console.log(result)

        // const searchesB = [...searches];
        for (let i = 0; i < array.length; i++)
        {
          const key = array[i];
          if (searchArr.includes(key))
          {
            searchArray1.push(searches.filter(search => search[1] == key)[0])
          } else
          {
            const array1 = result.filter(res => res.key == key)[0];
            let keywordarray = []
            keywordarray[0] = []
            await array1.keywords.map((key) =>
            {
              keywordarray[0].push({
                label: key,
                value: false
              })
            })
            keywordarray[1] = array1.key
            searchArray1.push(keywordarray)
          }
        }

        // for (let i = 0; i < result.length; i++) {
        //   const array1 = result[i];
        //   let keywordarray = []
        //   keywordarray[0] = []
        //   await array1.keywords.map((key) => {
        //     keywordarray[0].push({
        //       label: key,
        //       value: false
        //     })
        //   })
        //   keywordarray[1] = array1.key
        //   searchArray1.push(keywordarray)
        // }
      });
    setSearches(searchArray1)
    setSearchDetail(true)
    await condition(false)
    setSearchArray(testjson)
    searchArray1 = []
    console.log(testjson, '----t---')
    await Promise.all(testjson)
      .then(async function (result)
      {
        console.log(result)

        // const searchesB = [...searches];
        for (let i = 0; i < array.length; i++)
        {
          const key = array[i];
          if (searchArr.includes(key))
          {
            searchArray1.push(searches.filter(search => search[1] == key)[0])
          } else
          {
            const array1 = result.filter(res => res.key == key)[0];
            let keywordarray = []
            keywordarray[0] = []
            await array1.keywords.map((key) =>
            {
              keywordarray[0].push({
                label: key,
                value: false
              })
            })
            keywordarray[1] = array1.key
            searchArray1.push(keywordarray)
          }
        }

        // for (let i = 0; i < result.length; i++) {
        //   const array1 = result[i];
        //   let keywordarray = []
        //   keywordarray[0] = []
        //   await array1.keywords.map((key) => {
        //     keywordarray[0].push({
        //       label: key,
        //       value: false
        //     })
        //   })
        //   keywordarray[1] = array1.key
        //   searchArray1.push(keywordarray)
        // }
      });
    setSearches(searchArray1)
    setSearchDetail(true)
  }

  const searchClick = async () =>
  {
    if (!user)
    {
      let time = searchTimes + 1
      setSearchTimes(time)
      if (time > 3)
      {
        alert('More than 3 times search! Please login to continue!')
      } else
      {
        searchFuction()
      }
    } else
    {
      searchFuction()
    }

  }

  const allData = () =>
  {
    const csvData = [['AllData']];
    let i;
    for (i = 0; i < searches.length; i += 1)
    {
      csvData.push([searches[i][1]]);
      for (let j = 0; j < searches[i][0].length; j++)
      {
        csvData.push([`${searches[i][0][j].label}`, `${searches[i][0][j].value}`]);
      }
    }
    return csvData;
  }

  const selectExport = (i) =>
  {
    const csvData = [[`${searches[i][1]}}`]];
    for (let j = 0; j < searches[i][0].length; j++)
    {
      csvData.push([`${searches[i][0][j].label}`, `${searches[i][0][j].value}`]);
    }
    return csvData;
  }

  return (
    <>
      {/* SearchArea */}
      <section id="hero" className="align-items-center" data-aos="fade-up">
        <div className="container  flex-column align-items-center justify-content-center">
          <div id="ustdiv" className="fade-up" style={{ marginBottom: "100px" }}>
            <center>
              <h1 id="searchtitle"><img src={Logo} width="500" /></h1>
              <h2 id="searchtext">Keyword Tech is a keyword tool specially designed for Amazon!</h2>
            </center>
          </div>
          <div id="searcharea">
            <div className="row">
              <div className="col-md-7 col-sm-12" style={{ marginBottom: '3px' }}>
                <div className="input-group mb-0">
                  <span className="input-group-text" id="basic-addon1" onClick={flagListShow} style={{ borderBottomLeftRadius: '0px', padding: '1px', border: 'none' }}>
                    <img id="imgggg" src={flag} height="35" name="de" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-left-none"
                    placeholder="Keyword"
                    name="keyword"
                    aria-label="Keyword"
                    aria-describedby="basic-addon1"
                    id="keywordRequest"
                    onKeyDown={keywordkeydown}
                    onChange={inputChange}
                    value={keyword}
                  />
                </div>
                {flagList ? (
                  <div id="divv">
                    {flags.map((flag, i) => <div key={i}><img src={flag} id="de" height="35" onClick={() => selectFlag(flag)} style={{ margin: "1px" }} /><br /></div>)
                    }
                  </div>
                ) : null
                }
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchType"
                    name="searchType"
                    onChange={inputChange}
                    value={searchType}
                  >
                    <option value="">Open this select menu</option>
                    <option value="aps">All Categories</option>
                    <option value="game">Games</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2 col-sm-12" style={{ paddingRight: '25px', paddingLeft: '25px', marginBottom: '.5rem' }}>
                <div className="row">
                  <button className="btn btn-info" id="searchKeywords" onClick={searchClick}>Search</button>
                </div>
              </div>
            </div>
          </div>
          {
            searchDetail ? (
              <>
                <div id="altdiv" className="altdiv mt-1">
                  <div className="row mb5px">
                    <div className="col textleft paddtop5">
                      <span><b>Total :</b></span><span><b>{count} / {total}</b></span>
                    </div>
                    <div className="col textright">
                      <button
                        type="button"
                        className="btn btn-info"
                        id="selectallbtn"
                        onClick={selectAll}
                      >&nbsp;{!allSelect ? 'Select All' : 'Unselect All'}</button>
                      <CSVLink filename="all.csv" data={allData()}>
                        <button type="button" className="btn btn-info m-1" id="exportallbtn">Export All</button>
                      </CSVLink>
                    </div>
                  </div>
                </div>
                <div id="altdiv2" className="" >
                  <div className="row paddlr8" id="altdiv22" style={{ minHeight: "calc(100vh - 330px)" }}>
                    <Swiper
                      spaceBetween={3}
                      slidesPerView={3}
                      simulateTouch={false}
                      navigation
                      pagination={{
                        "type": "fraction",
                        clickable: true
                      }}
                      onSwiper={(swiper) => console.log()}
                      onSlideChange={() => console.log('slide change')}
                    >
                      {
                        searches.map((el, i) => (
                          <SwiperSlide key={i}>
                            <div className=" resultbykeyword" id="firstkey" >
                              <div className="row">
                                <center><h4 className="mb-3">{el[1]}</h4>
                                  <hr className="width20" /> </center>
                              </div>
                              <div className="row">
                                <div className="col textleft">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="first"
                                    checked={allSelectbyKey[i]}
                                    onChange={(e) => selectAllperKey(e.target.checked, i)}
                                  />
                                  <label className="form-check-label" >
                                    &nbsp;&nbsp;Select All
                                  </label>
                                </div>
                                <div className="col textright">
                                  <i id="firstcount">{el[0].filter((it) => it.value === true).length}</i><i>/{el[0].length}</i>
                                </div>
                              </div>
                              <div className="row style-7">
                                {el[0].map((key, j) => <div className={"row " + ((!user && j > 20) ? 'blur' : null)} key={j} >
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="first"
                                        value="adsadasdas"
                                        checked={key.value}
                                        onChange={(e) => SelectOne(e, i, j)}
                                      />
                                      <label className="form-check-label" htmlFor="firstkey2">
                                        {key.label}
                                      </label>
                                    </div>
                                  </div>
                                </div>)
                                }
                                {
                                  !user ? (
                                    el[0].length > 20 ? (
                                      <>
                                        <div className="blurdiv">
                                        </div>
                                        <div className="blurtext">
                                          <center><h2><a href="asdasd.html">Login</a></h2></center>
                                        </div>
                                      </>
                                    ) : null) : null
                                }
                              </div>
                              <div className="row justify-content-end">
                                <CSVLink filename={searches[i][1] + '.csv'} data={selectExport(i)}>
                                  <button type="button" className="btn btn-info exportbtnx" style={{ width: 'fit-content' }} name="first">Export</button>
                                </CSVLink>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>

                  </div>
                </div>
              </>
            ) : null
          }

        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/yaDPuQUnwcI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/s50vvwTystA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/kBcGMYilwfA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="features" data-aos="fade-up">
        <div className="container">
          {
            features.map((feature, i) => <Feature title={feature.title} image={feature.image} leftPosition={feature.leftPosition} details={feature.details} key={i} />)
          }
        </div>
      </section>
      {/* Services */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Our Features
            </p>
          </div>
          <div className="row">
            {
              services.map((service, i) => (

                <Service title={service.title} icon={service.icon} description={service.description} delay={(i + 1) % 4.5} key={i} />))
            }
          </div>
        </div>
      </section>
      {/* Steps */}
      <section id="steps" className="steps">
        <div className="container">
          <div className="row no-gutters" data-aos="fade-up">
            <center>
              <h2>Keywords and Amazon</h2>
            </center>
            {
              steps.map((step, i) => <Keystep number={step.number} title={step.title} description={step.description} delay={(i + 1) % 4} key={i} />)
            }
          </div>
        </div>
      </section>
      {/* Slides */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Customer Opinions</h2>
            <p>
              Who ... how ... where ... what ... why ... let's ask our customers. That's what they say about us!
            </p>
            <br />
            <p>
              Keyword Tech shows once again how important it is to specialize in one area. This one only focuses to Amazon keywords. We achieve significantly better keywords and are reaping the rest of other sellers.
            </p>
          </div>

          <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
              {
                testimonials.map((testimonial, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-item">
                      <p>
                        <i className="fa fa-quote-alt-left quote-icon-left"></i> {testimonial.description}
                        <i className="fa fa-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={testimonImgs[i]} className="testimonial-img" alt="" />
                      <h3>{testimonial.detail1}</h3>
                      <h4>{testimonial.detail2}</h4>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* Faqs */}
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <ul className="faq-list">
            {faqs.map((faq, i) => (
              <li key={i}>
                <div data-bs-toggle="collapse" className="collapsed question" href={"#faq" + (i + 1)}>
                  <KeyboardArrowDownOutlinedIcon className="icon-show fs-2" /><KeyboardArrowUpOutlinedIcon className="icon-close fs-2" />
                  {faq.title}
                </div>
                <div id={"faq" + (i + 1)} className="collapse" data-bs-parent=".faq-list">
                  <p>
                    {faq.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="pricing section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>
              Take Your Amazon Business To Next Level
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="box">
                <h3>Free</h3>
                <h4><sup>$</sup>0<span> / month</span></h4>
                <ul>
                  <li>Log-in required</li>
                  <li>40 Keywords</li>
                  <li>Unlimited search</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
              <div className="box featured">
                <h3>Our Recommendation</h3>
                <h4><sup>$</sup>19<span> / month</span></h4>
                <ul>
                  <li>Log-in required</li>
                  <li>Unlimited keywords</li>
                  <li>Unlimited search</li>
                  <li>Cancel anytime</li>
                  <li>Multiple Search</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="box">
                <h3>Yearly Plan</h3>
                <h4><sup>$</sup>29<span> / Yearly</span></h4>
                <ul>
                  <li>Log-in required</li>
                  <li>Unlimited keywords</li>
                  <li>Unlimited search</li>
                  <li>Cancel anytime</li>
                  <li>Multiple Search</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client */}
      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            {
              clients.map((client, i) => (
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" key={i}>
                  <img src={client} className="img-fluid" alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <RoomOutlinedIcon className="fs-2" style={{ color: "#3b4ef8" }} />
                    <h3>Our Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <MailOutlineOutlinedIcon className="fs-2" style={{ color: "#3b4ef8" }} />
                    <h3>Email Us</h3>
                    <p>info@example.com<br />contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <PhoneInTalkOutlinedIcon className="fs-2" style={{ color: "#3b4ef8" }} />
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-md-0">
              <div className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.layout = ({ children }) => <Auth breadCrumbStatus={false} homeStatus={true}>{children}</Auth>

export default Home