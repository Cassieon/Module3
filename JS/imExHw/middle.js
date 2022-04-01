export default function gyms(trainer) {
    let {age, name, gymBadges: {
            violetCity,
            petalburgCity,
            fortreeCity
        }} = trainer 


    console.log(name);
    console.log(age);
    console.log(violetCity);
    console.log(fortreeCity);
}