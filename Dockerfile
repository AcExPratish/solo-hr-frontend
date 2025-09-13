# ---- Base Node image ----
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# ---- Build stage ----
FROM base AS build
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS production

WORKDIR /app

# Install `serve` to serve the production build
RUN npm install -g serve

# Copy build files from previous stage
COPY --from=build /app/build ./build

# Expose port 3000 (default CRA serve port)
EXPOSE 3000

# Run the production build using serve
CMD ["serve", "-s", "build", "-l", "3000"]