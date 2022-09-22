async function first() {
    const res = await fetch('https://reqres.in/api/users');
    const data =  await res.json();
    console.log(data);
}
//first();

//2
async function sec() {
    try{
    const res = await fetch('https://this-site-doesnt-exists.intocode');
    const data =  await res.json();
    console.log(data);
    } catch(error) {
        console.log(error); 
    }
}
//sec();

//3
async function third() {
    try{
    const res = await fetch('https://reqres.in/api/users');
    const data =  await res.json();
    console.log(typeof data);
    } catch(error) {
        console.log(error); 
    }
}
//third();


//4
async function four() {
    try{
    const res = await fetch('https://reqres.in/api/users');
    const data =  await res.json();
    console.log(data.data.length);
    } catch(error) {
        console.log(error); 
    }
}
//four();

//5
async function five() {
    try{
    const res = await fetch('https://reqres.in/api/users/1');
    const data =  await res.json();
    console.log(data.data.email);
    } catch(error) {
        console.log(error); 
    }
}
//five();



//2.1
async function six() {
    try{
        const res = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
          },
        body: JSON.stringify({ "first_name": "intocode" }),
        });
        const data =  await res.json();
        console.log(data);
    } catch(error) {
        console.log(error); 
    }
}
//six();

//2.3
async function sev() {
    try{
        const ok = {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
              },
            body: JSON.stringify({ "first_name": "intocode" }),
            };
        const res = await fetch('https://reqres.in/api/users', ok);
        const data =  await res.json();
        console.log(data);
    } catch(error) {
        console.log(error); 
    }
}
//sev();

//2.4
async function addUser() {
    try{
        const ok = {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
              },
            body: JSON.stringify({ 
                "first_name": "int",
                "sec_name": "ode",
            }),
            };
        const res = await fetch('https://reqres.in/api/users', ok);
        const data =  await res.json();
        console.log(data);
    } catch(error) {
        console.log(error); 
    }
}
//addUser();

//2.5
async function removeUser() {
    try{
        const ok = {
            method: 'DELETE',
        };
        const res = await fetch('https://reqres.in/api/users/5', ok);
        if(res.status === 204) {
            console.log('Пользавател с id 5 был успешно удален!');
         }
    } catch(error) {
        console.log(error); 
    }
}
//removeUser();

//2.6
async function changeUser() {
    try{
        const ok = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
              },
            body: JSON.stringify({ 
                "first_name": "int",
            }),
        };
        const res = await fetch('https://reqres.in/api/users/3', ok);
        const data =  await res.json();
        console.log(data);
    } catch(error) {
        console.log(error); 
    }
}
changeUser();