const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const total = document.querySelectorAll('price');	
	let totalprice = 0;
	price.forEach(p=>{
		totalPrice += parseFloat(p.textContent);
	})
	 const totalRow = document.createElement("tr");
            totalRow.innerHTML = `
            <td colspan="2" class="total">Total Price: ${totalPrice}</td>
            `;
            groceryTable.appendChild(totalRow);
};
getSumBtn.addEventListener("click", getSum);

