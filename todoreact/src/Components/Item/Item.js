import React, { Component } from 'react'

export default class Item extends Component {

    state = {
        isDone : false,
        isEdit : false
    }

    done = () => {
        this.setState({
            isDone : !this.state.isDone
        })
    }
    
    edit = () => {
        this.setState({
            isEdit : !this.state.isEdit
        })
    }

    onInput = (e) => {
        if (e.key == "Enter") {
            this.edit()
            this.props.edit(e.target.value,this.props.id)
        }
    }

    render() {
        let style = "border bg-white d-flex text-align-center justify-content-between w-50 mx-auto mt-3 p-2 rounded"
        if (this.state.isDone) {
            style = "border text-white bg-success d-flex text-align-center justify-content-between w-50 mx-auto mt-3 p-2 rounded"
        }
        let itemValue = <span className="fs-1">{this.props.content}</span>
        if (this.state.isEdit == true) {
            itemValue = <input className="form-control w-50" onKeyDown={(e) => this.onInput(e)} type="text" defaultValue={this.props.content}/>
        }
        if (this.props.mode == "done" && this.state.isDone == false) {
            return null
        }
        if (this.props.mode == "todo" && this.state.isDone == true) {
            return null
        }
        return (
            <div className = {style} >
                {itemValue}
                <div>
                    <button className="btn btn-sm mr-1 btn-success border rounded" onClick={this.done}><i className="bi bi-check"></i></button>
                    <button className="btn btn-sm mr-1 btn-danger border rounded" onClick={() => this.props.remove(this.props.id)}><i className="bi bi-trash-fill"></i></button>
                    <button className="btn btn-sm mr-1 btn-warning border rounded text-white" onChange={() => {}} onClick={this.edit}><i className="bi bi-pencil-fill"></i></button>
                </div>
            </div>
        )
    }
}