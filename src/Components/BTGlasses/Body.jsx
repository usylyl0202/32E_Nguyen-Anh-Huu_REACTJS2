import React, { Component } from 'react'
import '../StyleComponent/style.css'
import data from './dataGlasses.json'

export default class
  extends Component {
  state = {
    isHide: false,
    isShow: true,
    kinh: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  render() {
    return (
      <div className='body'>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6 col-lg-4 left">
              <div class="glass_card">
                <div class="glass_model" id="avatar">
                  <div className="test_glasses">
                    <img src="./glassesImage/v7.png" alt="v7" />
                  </div>
                </div>
                <div id="glassesInfo" class="glass_infor">
                  <h1>FENDI F8750</h1>
                  <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 right">
              <div class="glass_card">
                <div class="glass_model" id="avatar">
                  {this.state.isHide && (
                    <div className="test_glasses">
                      <img src={this.state.kinh.url} alt="v7" />
                    </div>
                  )}
                </div>
                {this.state.isHide && (
                  <div id="glassesInfo" class="glass_infor">
                    <h1>{this.state.kinh.name}</h1>
                    <p>{this.state.kinh.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="glass_list">
            {this.state.isShow && (
              <div className="row">
                {data.map((glass, index) => {
                  return (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 glasses-item" key={glass.id}>
                      <a
                        onClick={() => {
                          this.setState({
                            kinh: glass,
                            isHide: true
                          })
                        }}>
                        <img src={`./glassesImage/g${glass.id}.jpg`} alt="" />
                      </a>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
