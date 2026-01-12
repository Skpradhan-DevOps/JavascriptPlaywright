let users: string[] = ['sid', 'rahul'];
console.log(`Users: ${users.join(", ")}`);
let scores: Array<number> = [95, 85];
console.log(`Scores: ${scores.join(", ")}`);    
console.log(`First User: ${users[0]}`);
console.log(`First Score: ${scores[0]}`);
console.log(`Number of Users: ${users.length}`);

users.push('anita');
scores.push(90);
console.log(`Updated Users: ${users.join(", ")}`);
console.log(`Updated Scores: ${scores.join(", ")}`);

for (let i = 0; i < users.length; i++) {
    console.log(`User ${i + 1}: ${users[i]}`);
}

scores.forEach((score, index) => {
    console.log(`Score ${index + 1}: ${score}`);
});

console.log(users.filter(user => user.startsWith('r')));
console.log(users.filter(u=>u.replace('a','A')));
console.log(users.map(user => user.toUpperCase()));
console.log(scores.reduce((total, score) => total + score, 0));
console.log(users.map(u=>u.replace('a','A')));