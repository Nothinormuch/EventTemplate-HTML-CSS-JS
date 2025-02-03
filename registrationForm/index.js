const MAX_TEAM_MEMBERS = 10;

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function updateMemberFields() {
    const numMembers = document.getElementById('num-members').value;
    const memberFields = document.getElementById('member-fields');
    memberFields.innerHTML = '';

    for (let i = 1; i <= numMembers; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', `member${i}`);
        label.textContent = `Member ${i} Name:`;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', `member${i}`);
        input.setAttribute('required', 'true');

        memberFields.appendChild(label);
        memberFields.appendChild(input);
    }
}

const numMembersSelect = document.getElementById('num-members');
for (let i = 1; i <= MAX_TEAM_MEMBERS; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    numMembersSelect.appendChild(option);
}

updateMemberFields();


function toggleScreenshot() {
    const paymentMethod = document.getElementById('payment-method').value;
    const screenshotUpload = document.getElementById('screenshot-upload');
    const transaction = document.getElementById('transaction-id');
    const transactionLabel = document.getElementById('transaction-id-label');

    if (paymentMethod === 'cash') {
        screenshotUpload.style.display = 'none';
        transaction.style.display = 'none';
        transactionLabel.style.display = 'none';
    } else {
        screenshotUpload.style.display = 'block';
        transaction.style.display = 'block';
        transactionLabel.style.display = 'block';
    }
}

toggleScreenshot();

function toggleAffiliationFields() {
    const sameCollege = document.getElementById('same-college').value;
    const clubInfo = document.getElementById('club-info');
    const otherCollegeInfo = document.getElementById('other-college-info');

    if (sameCollege === 'yes') {
        clubInfo.style.display = 'block';
        otherCollegeInfo.style.display = 'none';
    } else {
        clubInfo.style.display = 'none';
        otherCollegeInfo.style.display = 'block';
    }
    toggleIDFields();
}

function toggleIDFields() {
    const sameClub = document.getElementById('same-club').value;
    const idFields = document.getElementById('id-fields');
    const clubIDField = document.getElementById('club-id-field');

    if (document.getElementById('same-college').value === 'yes') {
        if (sameClub === 'yes') {
            idFields.style.display = 'block';
            clubIDField.style.display = "block";
        } else {
            idFields.style.display = 'block';
            clubIDField.style.display = "none";
        }
    }
}

toggleAffiliationFields();

// Add some CSS for the active class (moved to script.js)
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        background-color: #ddd;
        color: #333;
    }
`;
document.head.appendChild(style);
