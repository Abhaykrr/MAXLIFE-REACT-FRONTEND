import React from 'react'
import "../components/CSS/inovice.css"

const Inovice = ({location }) => {

    console.log(location)
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

<div className="col-md-12">   
 <div className="row">
		
        <div className="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
            <div className="row">
    			<div className="receipt-header">
					<div className="col-xs-6 col-sm-6 col-md-6">
						<div className="receipt-left">
							<img className="img-responsive" alt="iamgurdeeposahan" src="https://bootdey.com/img/Content/avatar/avatar6.png" style={{width: '71px', borderRadius: '43px'}}/>
						</div>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 text-right">
						<div className="receipt-right">
							<h5>Company Name.</h5>
							<p>+1 3649-6589 <i className="fa fa-phone"></i></p>
							<p>company@gmail.com <i className="fa fa-envelope-o"></i></p>
							<p>USA <i className="fa fa-location-arrow"></i></p>
						</div>
					</div>
				</div>
            </div>
			
			<div className="row">
				<div className="receipt-header receipt-header-mid">
					<div className="col-xs-8 col-sm-8 col-md-8 text-left">
						<div className="receipt-right">
							<h5>Customer Name </h5>
							<p><b>Mobile :</b> +1 12345-4569</p>
							<p><b>Email :</b> customer@gmail.com</p>
							<p><b>Address :</b> New York, USA</p>
						</div>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4">
						<div className="receipt-left">
							<h3>INVOICE # 102</h3>
						</div>
					</div>
				</div>
            </div>
			
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-md-9">Payment for August 2016</td>
                            <td className="col-md-3"><i className="fa fa-inr"></i> 15,000/-</td>
                        </tr>
                        <tr>
                            <td className="col-md-9">Payment for June 2016</td>
                            <td className="col-md-3"><i className="fa fa-inr"></i> 6,00/-</td>
                        </tr>
                        <tr>
                            <td className="col-md-9">Payment for May 2016</td>
                            <td className="col-md-3"><i className="fa fa-inr"></i> 35,00/-</td>
                        </tr>
                        <tr>
                            <td className="text-right">
                            <p>
                                <strong>Total Amount: </strong>
                            </p>
                            <p>
                                <strong>Late Fees: </strong>
                            </p>
							<p>
                                <strong>Payable Amount: </strong>
                            </p>
							<p>
                                <strong>Balance Due: </strong>
                            </p>
							</td>
                            <td>
                            <p>
                                <strong><i className="fa fa-inr"></i> 65,500/-</strong>
                            </p>
                            <p>
                                <strong><i className="fa fa-inr"></i> 500/-</strong>
                            </p>
							<p>
                                <strong><i className="fa fa-inr"></i> 1300/-</strong>
                            </p>
							<p>
                                <strong><i className="fa fa-inr"></i> 9500/-</strong>
                            </p>
							</td>
                        </tr>
                        <tr>
                           
                            <td className="text-right"><h2><strong>Total: </strong></h2></td>
                            <td className="text-left text-danger"><h2><strong><i className="fa fa-inr"></i> 31.566/-</strong></h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
			
			<div className="row">
				<div className="receipt-header receipt-header-mid receipt-footer">
					<div className="col-xs-8 col-sm-8 col-md-8 text-left">
						<div className="receipt-right">
							<p><b>Date :</b> 15 Aug 2016</p>
							<h5 >Thanks for shopping.!</h5>
						</div>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4">
						<div className="receipt-left">
							<h1>Stamp</h1>
						</div>
					</div>
				</div>
            </div>
			
        </div>    
	</div>
</div>
      
    </div>
  )
}

export default Inovice
