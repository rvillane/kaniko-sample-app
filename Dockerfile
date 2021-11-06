    FROM node:12-alpine  

    RUN mkdir -p /dist
    RUN chown -R node:node /dist
    WORKDIR /dist

    # source folder is the kaniko context /workspace
    COPY * /dist/

    RUN apk -U upgrade && apk add --upgrade openssl

    ENV NODE_EXTRA_CA_CERTS=/dist/file.crt

    # fixes the 'can’t find Python executable' error
    RUN apk add --no-cache --virtual .gyp \
            python3 \
            make \
            g++ \
        && npm install -g nodemon \
        && npm install --production \
        && npm cache clean --force \
        && apk del .gyp \
        && find /dist/node_modules/ -name '*.key' -delete \
      && rm -rf /usr/local/lib/node_modules/npm

    USER node

    CMD ["node", "app.js"]
