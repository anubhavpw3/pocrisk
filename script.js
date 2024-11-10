const applicantData = {
    "1001": {
        "name": "Rakesh Kumar",
        "age": 35,
        "income": 500000,
        "credit_score": 750,
        "loan_amount": 200000,
        "loan_term": 36,
        "interest_rate": 10.5
    },
    "1002": {
        "name": "Priya Singh",
        "age": 28,
        "income": 650000,
        "credit_score": 780,
        "loan_amount": 300000,
        "loan_term": 24,
        "interest_rate": 9
    },
    "1003": {
        "name": "Anil Verma",
        "age": 42,
        "income": 800000,
        "credit_score": 720,
        "loan_amount": 150000,
        "loan_term": 12,
        "interest_rate": 11
    },
    "1004": {
        "name": "Neha Sharma",
        "age": 30,
        "income": 550000,
        "credit_score": 770,
        "loan_amount": 250000,
        "loan_term": 18,
        "interest_rate": 10
    },
    "1005": {
        "name": "Rahul Gupta",
        "age": 25,
        "income": 450000,
        "credit_score": 700,
        "loan_amount": 100000,
        "loan_term": 24,
        "interest_rate": 12
    },
    "1006": {
        "name": "Sunita Patel",
        "age": 48,
        "income": 900000,
        "credit_score": 740,
        "loan_amount": 400000,
        "loan_term": 60,
        "interest_rate": 8.5
    },
    "1007": {
        "name": "Ajay Mehta",
        "age": 38,
        "income": 750000,
        "credit_score": 760,
        "loan_amount": 350000,
        "loan_term": 36,
        "interest_rate": 9.5
    },
    "1008": {
        "name": "Kavita Joshi",
        "age": 32,
        "income": 600000,
        "credit_score": 725,
        "loan_amount": 150000,
        "loan_term": 24,
        "interest_rate": 10
    },
    "1009": {
        "name": "Vishal Singh",
        "age": 45,
        "income": 1000000,
        "credit_score": 810,
        "loan_amount": 500000,
        "loan_term": 48,
        "interest_rate": 7.5
    },
    "1010": {
        "name": "Deepika Rana",
        "age": 29,
        "income": 580000,
        "credit_score": 690,
        "loan_amount": 100000,
        "loan_term": 12,
        "interest_rate": 12.5
    },
    "1011": {
        "name": "Arjun Desai",
        "age": 40,
        "income": 780000,
        "credit_score": 750,
        "loan_amount": 300000,
        "loan_term": 36,
        "interest_rate": 9
    },
    "1012": {
        "name": "Sneha Kulkarni",
        "age": 26,
        "income": 480000,
        "credit_score": 710,
        "loan_amount": 200000,
        "loan_term": 24,
        "interest_rate": 10.5
    },
    "1013": {
        "name": "Manoj Singh",
        "age": 50,
        "income": 1200000,
        "credit_score": 820,
        "loan_amount": 600000,
        "loan_term": 60,
        "interest_rate": 8
    },
    "1014": {
        "name": "Alok Kumar",
        "age": 34,
        "income": 540000,
        "credit_score": 730,
        "loan_amount": 150000,
        "loan_term": 18,
        "interest_rate": 11
    },
    "1015": {
        "name": "Pooja Sharma",
        "age": 27,
        "income": 620000,
        "credit_score": 740,
        "loan_amount": 250000,
        "loan_term": 36,
        "interest_rate": 9.5
    },
    "1016": {
        "name": "Rohit Bansal",
        "age": 39,
        "income": 700000,
        "credit_score": 770,
        "loan_amount": 200000,
        "loan_term": 24,
        "interest_rate": 9
    },
    "1017": {
        "name": "Aarti Menon",
        "age": 31,
        "income": 650000,
        "credit_score": 760,
        "loan_amount": 300000,
        "loan_term": 48,
        "interest_rate": 8.5
    },
    "1018": {
        "name": "Suraj Mishra",
        "age": 43,
        "income": 890000,
        "credit_score": 800,
        "loan_amount": 400000,
        "loan_term": 36,
        "interest_rate": 9.5
    },
    "1019": {
        "name": "Meena Yadav",
        "age": 29,
        "income": 530000,
        "credit_score": 710,
        "loan_amount": 100000,
        "loan_term": 12,
        "interest_rate": 12
    },
    "1020": {
        "name": "Karan Rathi",
        "age": 37,
        "income": 780000,
        "credit_score": 755,
        "loan_amount": 250000,
        "loan_term": 24,
        "interest_rate": 10
    }
};


function loadApplicant() {
    const searchInput = document.getElementById('applicant_id').value.toLowerCase();
    let data = null;
    let applicantDataID;

    if (applicantData[searchInput]) {
        data = applicantData[searchInput];
    } else {
        for (applicantDataID in applicantData) {
            console.log(applicantData[applicantDataID].name.toLowerCase());
            console.log(searchInput);
            
            if (applicantData[applicantDataID].name.toLowerCase().includes(searchInput)) {
                data = applicantData[applicantDataID];
                break;
            }
        }
    }

    if (data) {
        document.getElementById('applicantDetails').style.display = 'block';
        document.getElementById('applicant_name').textContent = data.name;
        document.getElementById('applicant_age').textContent = data.age;
        document.getElementById('applicant_income').textContent = data.income;
        document.getElementById('applicant_credit_score').textContent = data.credit_score;
        document.getElementById('loan_amount').value = data.loan_amount;
        document.getElementById('loan_term').value = data.loan_term;
        document.getElementById('interest_rate').value = data.interest_rate;
    } else {
        alert("Applicant not found");
    }
}


function calculatePayment() {
    const loanAmount = parseFloat(document.getElementById('loan_amount').value);
    const loanTerm = parseInt(document.getElementById('loan_term').value);
    const interestRate = parseFloat(document.getElementById('interest_rate').value) / 100;  // Convert to decimal

    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('paymentDetails').style.display = 'block';
    document.getElementById('monthly_payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total_interest').textContent = totalInterest.toFixed(2);
    document.getElementById('total_payment').textContent = totalPayment.toFixed(2);
}


function acceptApplication() {
    alert("Application Accepted");
    // Add logic to handle accepting the application here
}

function rejectApplication() {
    alert("Application Rejected");
    // Add logic to handle rejecting the application here
}

function modifyApplication() {
    alert("Modify Application");
    // Add logic to handle modifying the application here
}