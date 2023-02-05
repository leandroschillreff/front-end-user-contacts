FROM node

WORKDIR /user_contacts_app

COPY package.json /user_contacts_app

RUN yarn

COPY . /user_contacts_app