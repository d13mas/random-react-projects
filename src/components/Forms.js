import React, { useState } from "react";

const Forms = (props) => {
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        optIn: false,
        options: "",
        selection: ""
    })

    function handleChange(e) {
        const {name, value, type, checked} = e.target

        setFields(prevFields => {
            return {
                ...prevFields,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(fields)
    }
    const styles = {
        display: "flex"
    }
    return (
        <div style={ styles }>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First name"
                    onChange={handleChange}
                    name="firstName"
                    value={fields.firstName}
                />
                <input type="text" placeholder="Last name"
                    onChange={handleChange}
                    name="lastName"
                    value={fields.lastName}
                />
                <input type="email" placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={fields.email}
                />
                <textarea placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                    value={fields.comments} />
                <input type="checkbox"
                    onChange={handleChange}
                    name="optIn"
                    id="optIn"
                    checked={fields.optIn}
                />
                <label htmlFor="optIn">Would you like to receive tons of SPAM?</label>
                <fieldset>
                    <legend>Options to select from</legend>
                    <input
                        type="radio"
                        id="opt1"
                        name="options"
                        value="opt1"
                        checked = {fields.options === "opt1"}
                        onChange={handleChange}
                    />
                    <label htmlFor="opt1">Option 1</label><br />
                    <input
                        type="radio"
                        id="opt2"
                        name="options"
                        value="opt2"
                        checked = {fields.options === "opt2"}
                        onChange={handleChange}
                    />
                    <label htmlFor="opt2">Option 2</label><br />
                    <input
                        type="radio"
                        id="opt3"
                        name="options"
                        value="opt3"
                        checked = {fields.options === "opt3"}
                        onChange={handleChange}
                    />
                    <label htmlFor="opt3">Option 3</label>
                </fieldset>
                <label htmlFor="selection">Select one of the options</label><br />
                <select
                    id="selection"
                    value={fields.selection}
                    onChange={handleChange}
                    name="selection"
                >
                    <option value="">-- Selection an option --</option>
                    <option value="A">Selection A</option>
                    <option value="B">Selection B</option>
                    <option value="C">Selection C</option>
                    <option value="D">Selection D</option>
                    <option value="E">Selection E</option>
                    <option value="F">Selection F</option>
                </select>
                <button>Send</button>
            </form>
            <pre>Object from the Form<br />{ JSON.stringify(fields, null, 2) }</pre>
        </div>
    )
}

export default Forms