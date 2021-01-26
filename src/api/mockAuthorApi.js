import delay from './delay';

// Mocks a web API working with fake data
// Uses setTimeout to simulate the delay of an AJAX call
// Return promises

const authors = [
    {
        id: 'mostafa-golf',
        firstName: 'Mostafa',
        lastName: "Golf"
    },
    {
        id: 'mostafa-tour',
        firstName: 'Mostafa',
        lastName: "Tour"
    },
    {
        id: 'mostafa-web',
        firstName: 'Mostafa',
        lastName: "Web"
    }
];

const generateId = author => {
    return author.firstName.toLowerCase() + '-' + author.firstName.toLowerCase();
};

class AuthorApi {
    static getAllAuthors() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], authors));
            }, delay);
        });
    }

    static saveAuthor(author) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minAuthorNameLength = 3;
                if (author.firstName.length < minAuthorNameLength) {
                    reject(`First name must be at least ${minAuthorNameLength} characters.`);
                }
                
                if (author.lastName.length < minAuthorNameLength) {
                    reject(`Last name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                } else {
                    // Simulating creation, generating Ids
                    // cloning so copy returned is passed by value rather than reference
                    author.id = generateId(author);
                    authors.push(author);
                }

                resolve(Object.assign({}, author));
            }, delay);
        });
    }

    static deleteAuthor(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const idxAuthorToDeleted = authors.findIndex(author => {
                    author.id == authorId;
                });
                authors.splice(idxAuthorToDeleted, 1);
                resolve();
            }, delay);
        });
    }
}

export default AuthorApi;