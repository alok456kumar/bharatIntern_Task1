document.addEventListener('DOMContentLoaded', function () {
    const contentForm = document.getElementById('content-form');
    const blogContent = document.getElementById('blog-content');
    const contentArray = [];

    contentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').value;
        const video = document.getElementById('video').value;

        // Store the entered data in an object
        const entry = { title, content, image, video };
        contentArray.push(entry);

        // Display the content
        const entryHTML = `
            <div class="blog-entry">
                <h2>${title}</h2>
                <p>${content}</p>
                <img src="${image}" alt="Image">
                <iframe src="${video}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
        blogContent.insertAdjacentHTML('beforeend', entryHTML);

        // Clear form fields
        contentForm.reset();
    });
});
