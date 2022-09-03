import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'
import ReactTags from 'react-tag-autocomplete';
import Dropzone from 'react-dropzone';
import { Button, Modal } from 'react-bootstrap';
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};
const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export class EditAudio extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      modal: false,
      audio: [],
      chapter: [{ id: 1, name: '', file: [], session: [{ id: 1, name: '', file: [] }] }]
    };
    this.onDrop = (index, acceptedFiles) => {
      console.log(index);
      const files = [...this.state.chapter]
     
      files[index].file.push(...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
      this.setState({
        chapter: files
      });
    }
    this.onDrop1 = (index,j, acceptedFiles) => {
      
      const files = [...this.state.chapter]
      console.log(files);
      files[index].session[j].file.push(...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
      this.setState({
        chapter: files
      });
    }
  }
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
  }
  openModal = (e, file) => {
    console.log(file)
    this.setState({
      modal: true,
      audio: file
    })

  }
  onCloseMedia = (e, index,k) => {
    e.stopPropagation();
    console.log(index);
    const files = [...this.state.chapter]
    files[index].file.splice(k, 1)
    console.log(files)
    this.setState({ chapter: files })
  }
  onCloseMedia1 = (e, index,j,k) => {
    e.stopPropagation();
    console.log(index);
    const files = [...this.state.chapter]
    files[index].session[j].file.splice(k, 1)
    console.log(files)
    this.setState({ chapter: files })
  }
  addSession = (e, i) => {
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter[i].session.push({ id: this.state.chapter[i].session[this.state.chapter[i].session.length - 1].id + 1, name: '',file: [] });
    this.setState({ chapter: chapter });
  }
  addChapter = (e) => {
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter.push({ id: this.state.chapter[this.state.chapter.length - 1].id + 1, name: '',file: [], session: [{ id: 1, name: '',file: [] }] });
    this.setState({ chapter: chapter });
  }
  deleteSession(e,i,j){
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter[i].session.splice(j, 1);
    this.setState({ chapter: chapter });
  }
  deleteChapter(e, index) {
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter.splice(index, 1);
    this.setState({ chapter: chapter });
  }
  onSubmitApi = (e) => {

    // e.preventDefault();
  }
  render() {
    console.log(this.state.files)
    // const thumbs = this.state.files.map((file, i) => (
      
    // ));
    return (
      <div>

        <div className="row">

          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Horizontal Two column</h4> */}
                <form className="form-sample" onSubmit={(e) => this.onSubmitApi(e)}>
                  {/* <p className="card-description"> Personal info </p> */}
                  
                
                  
                  
                 
                  
                
                
                  <div className='row'>
                    <div className='col-md-12'>
                      {this.state.chapter.map((chapter, i) => {
                        return (
                          <div key={i} style={{ border: '1px solid #bbbaba', padding: 20, marginBottom: 20, position: 'relative' }}>
                            <Form.Group className="row">
                              <label className="col-sm-3 col-form-label">Chapter Name</label>
                              <div className="col-sm-9">
                                <Form.Control type="text" />
                              </div>
                            </Form.Group>
                            <Form.Group className="row">
                              <label className="col-sm-3 col-form-label">Upload Audio</label>
                              <div className="col-sm-9">
                                <Dropzone accept={'audio/*'} onDrop={(data) => this.onDrop(i, data)} >
                                  {({ getRootProps, getInputProps }) => (
                                    <section>
                                      <div {...getRootProps()} style={{ minHeight: '100px', border: '1px solid #ebedf2' }}>
                                        <input {...getInputProps()} />
                                        <p className="text-center my-5">Drag 'n' drop some files here, or click to select files</p>
                                      </div>
                                      <aside style={thumbsContainer}>
                                        {chapter.file.map((file, k) => {
                                          return (
                                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative',width:'100%' }} onClick={(e) => this.openModal(e, file)}>
                                              <div style={thumb} key={file.name}>
                                                <div style={thumbInner}>
                                                  <i className='fa fa-file-audio-o' style={{ fontSize: 40 }}></i>
                                                  <i className='mdi mdi-close' style={{ position: 'absolute', top: 0, right: 0, fontSize: 20 }} onClick={(e) => this.onCloseMedia(e, i, k)}></i>
                                                </div>

                                              </div>
                                              <p>{file.name}</p>
                                            </div>
                                          )

                                        })}
                                      
                                      </aside>
                                    </section>
                                  )}
                                </Dropzone>
                              </div>
                            </Form.Group>
                            {(i > 0) ? <button className="btn btn-danger btn-sm icon-btn ml-2" onClick={(e) => this.deleteChapter(e, i)} style={{ position: 'absolute', top: '-5px', right: '-25px' }}><i className="icon-trash"></i></button> : null}

                            {chapter.session.map((session, j) => {
                              return (
                                <div key={j} style={{ border: '1px solid #bbbaba', padding: 20, marginBottom: 10, marginLeft: 100, position: 'relative' }}>
                                  <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Inside Chapter Name</label>
                                    <div className="col-sm-9">
                                      <Form.Control type="text" />
                                    </div>
                                  </Form.Group>
                                  <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Upload Audio</label>
                                    <div className="col-sm-9">
                                      <Dropzone accept={'audio/*'} onDrop={(data) => this.onDrop1(i,j, data)} >
                                        {({ getRootProps, getInputProps }) => (
                                          <section>
                                            <div {...getRootProps()} style={{ minHeight: '100px', border: '1px solid #ebedf2' }}>
                                              <input {...getInputProps()} />
                                              <p className="text-center my-5">Drag 'n' drop some files here, or click to select files</p>
                                            </div>
                                            <aside style={thumbsContainer}>
                                            {session.file.map((file, k) => {
                                          return (
                                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative',width:'100%' }} onClick={(e) => this.openModal(e, file)}>
                                              <div style={thumb} key={file.name}>
                                                <div style={thumbInner}>
                                                  <i className='fa fa-file-audio-o' style={{ fontSize: 40 }}></i>
                                                  <i className='mdi mdi-close' style={{ position: 'absolute', top: 0, right: 0, fontSize: 20 }} onClick={(e) => this.onCloseMedia1(e, i,j, k)}></i>
                                                </div>

                                              </div>
                                              <p>{file.name}</p>
                                            </div>
                                          )

                                        })}
                                            </aside>
                                          </section>
                                        )}
                                      </Dropzone>
                                    </div>
                                  </Form.Group>
                                  {(j > 0) ? <button className="btn btn-danger btn-sm icon-btn ml-2" onClick={(e) => this.deleteSession(e, i,j)} style={{ position: 'absolute', top: '-5px', right: '-25px' }} ><i className="icon-trash"></i></button> : null}
                                </div>
                              )
                            })}
                            <div style={{ textAlign: 'right' }}>
                              <button className="btn btn-danger btn-sm icon-btn ml-2" onClick={(e) => this.addSession(e, i)} >Add Inside</button></div>
                          </div>
                        )
                      })}
                      <button className="btn btn-info btn-sm icon-btn ml-2 mb-2" onClick={(e) => this.addChapter(e)} style={{ float: 'right' }}>Add Chapter</button>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.modal}
          onHide={() => this.setState({ modal: false })}
          aria-labelledby="example-modal-sizes-title-md"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.audio.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <audio style={{ width: '100%' }} src={this.state.audio.preview} controls></audio>


          </Modal.Body>

          {/* <Modal.Footer className="fleex-wrap">
                    <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
                    <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
                  </Modal.Footer> */}
        </Modal>
      </div>
    )
  }
}

export default EditAudio
