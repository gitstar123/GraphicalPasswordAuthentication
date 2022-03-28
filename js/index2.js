const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
// imgBox.addEventListener('dragstart', (e) => {
    // console.log('DragStart has been triggered');
    // e.target.className += ' hold';
    // setTimeout(() => {
    //     e.img.className = 'hide';
    // }, 0);

// });

// imgBox.addEventListener('dragend', (e) => {
//     console.log('DragEnd has been triggered');
// 	console.log(e.target)
//     e.target.children[0].classList.add('hide');
// });

// for (whiteBox of whiteBoxes) {
    // whiteBox.addEventListener('dragover', (e) => {
    //     e.preventDefault();
    //     // console.log('DragOver has been triggered');
    // });

    // whiteBox.addEventListener('dragenter', (e) => {
    //     console.log('DragEnter has been triggered');
    //     e.target.className += ' dashed'; 
    // })

    // whiteBox.addEventListener('dragleave', (e) => {
    //     console.log('DragLeave has been triggered');
    //     e.target.className = 'whiteBox'
    // })

    // whiteBox.addEventListener('drop', (e) => {
    //     console.log('Drop has been triggered');
    //     e.target.append(imgBox);
    // })
// }




// -----------------

let files = [];
button = document.querySelector('.top button');
form = document.querySelector('form');
container = document.querySelector('.container');
text = document.querySelector('.inner');
browse = document.querySelector('.select');
input = document.querySelector('form input'); 

browse.addEventListener('click', () => input.click());

// input change event
const fn = input.addEventListener('change', () => {
	let file = input.files;

	for (let i = 0; i < file.length; i++) {
		if (files.every(e => e.name !== file[i].name)) files.push(file[i])
	}

	form.reset();
	showImages();
})

const showImages = () => {
	let images = '';
	files.forEach((e, i) => {
		images += `<div class="image">
    			<img src="${URL.createObjectURL(e)}" alt="image">
    			<span onclick="delImage(${i})">&times;</span>
    		</div>`
	})

	container.innerHTML = images;
} 

const delImage = index => {
	files.splice(index, 1)
	showImages();
} 

// drag and drop 
form.addEventListener('dragover', e => {
	e.preventDefault()

	form.classList.add('dragover')
	text.innerHTML = 'Drop images here'
})

form.addEventListener('dragleave', e => {
	e.preventDefault()

	form.classList.remove('dragover')
	text.innerHTML = 'Drag & drop image here or <span class="select">Browse</span>'
})

form.addEventListener('drop', e => {
	e.preventDefault()

    form.classList.remove('dragover')
	text.innerHTML = 'Drag & drop image here or <span class="select">Browse</span>'

	let file = e.dataTransfer.files;
	for (let i = 0; i < file.length; i++) {
		if (files.every(e => e.name !== file[i].name)) files.push(file[i])
	}

	showImages();
})

button.addEventListener('click', () => {
	let form = new FormData();
	files.forEach((e, i) => form.append(`file[${i}]`, e))

	// now you can send the image to server using FETCH API
	
})