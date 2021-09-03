client is here [client](https://github.com/vivek80801/Amiure-client)

### set up

make sure, you have `nodejs` and `mongodb` installed on your local device. If you haven't. just search online

Then run.

```sh
# clone the server
git clone https://github.com/vivek80801/Amiure.git

# installing dependencies in server
# if you have yarn.
yarn

# OR
yarn install

# if you don't have yarn. delete yarn.lock file.
npm install

# run the server
# make sure you started `mongodb` service
yarn dev

# OR
npm run dev

# navigate into client
cd Amiure/client

# clone client
git clone https://github.com/vivek80801/Amiure-client.git .

# installing dependencies in client
# if you have yarn.
yarn

# OR
yarn install

# if you don't have yarn. delete yarn.lock file.
npm install

# run client
yarn start

# OR
npm start
```

your `server` should be running on `http://localhost:5000` and client should be running on `http://localhost:3000`

