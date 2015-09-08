FROM centos:centos6

# Enable EPEL for Node.js
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node.js and npm
RUN yum install -y npm

# Bundle app source
COPY lib /lib/

COPY package.json /package.json

# Install app dependencies
RUN npm install --production

RUN pwd && ls -la /lib/

EXPOSE 9090

CMD ["node", "lib/app.js"]