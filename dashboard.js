<script type="module">
  import { db } from './firebase.js';
  import { collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js';

  const nurseTable = document.getElementById('nurse-table');
  const employerTable = document.getElementById('employer-table');

  onSnapshot(collection(db, 'nurses'), snapshot => {
    nurseTable.innerHTML = '';
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      nurseTable.innerHTML += `<tr>
        <td>${data.fullName}</td>
        <td>${data.email}</td>
        <td>${data.country}</td>
        <td>${data.shift}</td>
        <td>${(data.locations || []).join(', ')}</td>
      </tr>`;
    });
  });

  onSnapshot(collection(db, 'employers'), snapshot => {
    employerTable.innerHTML = '';
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      employerTable.innerHTML += `<tr>
        <td>${data.org}</td>
        <td>${data.contact}</td>
        <td>${data.country}</td>
        <td>${data.roles}</td>
        <td>${data.shift}</td>
        <td>${(data.locations || []).join(', ')}</td>
      </tr>`;
    });
  });
</script>
