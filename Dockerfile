# ---- Base Node image ----
FROM node:22-alpine AS base

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
FROM node:22-alpine AS production

WORKDIR /app

# Install `serve` to serve the production build
RUN npm install -g serve

# Copy build files from previous stage
COPY --from=build /app/build ./build

# Expose port 5173 (default CRA serve port)
EXPOSE 5173

# Run the production build using serve
CMD ["serve", "-s", "build", "-l", "5173"]
