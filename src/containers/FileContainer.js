import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import *as fileActions from '../store/modules/file'
import File from '../components/FIle'

class FileContainer extends Component{

  handleImageChange =  (e) => {
    e.persist()
    let previewUrl = []
    const files = e.target.files
    const fileArr = Array.prototype.slice.call(files)
    const { FileActions : {setPreview} } = this.props
    let index = 0
    fileArr.forEach( (file, loopIndex ) => {
      if(!file.type.match("image.*")){
        alert('이미지 형식만 가능')
        window.location.reload()
      }
      const reader = new FileReader()
      reader.onload = () => {
        previewUrl.push({id : index, previewUrl : reader.result})
        if(loopIndex === (fileArr.length - 1)) {
          setPreview({inputName : e.target.name, fileList : previewUrl})
        }
        index++
      }
      reader.readAsDataURL(file)
    })
  }
  render(){
    const { handleImageChange } = this
    const { myInput } = this.props
    return(
        <File
            imagePreview={myInput}
            onImageChange={handleImageChange}
        />
    )
  }
}

export default connect(
    (state) => ({
      myInput : state.file.get('myInput').toJS()
    }),
    (dispatch) => ({
      FileActions : bindActionCreators(fileActions, dispatch)
    })
)(FileContainer)