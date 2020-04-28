import React, { useRef } from 'react'

export default function AddCustomerForm({addCustomerCallback}) {
    const customerName = useRef()

    function addCustomer(e) {
        e.preventDefault()

        const name = customerName.current.value
        if(name === '')
            return
            
        addCustomerCallback(name)
        customerName.current.value = null
    }

    return (
    <form onSubmit={addCustomer} className="container my-5 py-5">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <h4 className="font-weight-bold mb-4">LÄGG TILL NY KUND</h4>
              <div className="input-group mb-4">
                <input ref={customerName} type="text" className="form-control" placeholder="Ange kundens namn" aria-label="Ange kundens namn"
                  aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-md btn-default m-0 px-3 py-2 z-depth-0 waves-effect" type="submit"
                    id="button-addon2">LÄGG TILL</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </form>


      
    )
}
