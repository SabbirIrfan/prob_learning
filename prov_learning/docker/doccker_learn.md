# Create a Markdown string with the detailed explanation on modifying Docker images and containers.
markdown_content = """
# Modifying Docker Images and Containers

## Modifying a Docker Image

### Method 1: Update the Dockerfile and Rebuild

1. **Edit the Dockerfile**: Modify the `Dockerfile` to reflect the changes you want in the image.
2. **Rebuild the Image**: Use the `docker build` command to create a new image with the modifications.

#### Example
\`\`\`Dockerfile
# Original Dockerfile
FROM python:3.8-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 80
ENV NAME World
CMD ["python", "app.py"]

# Modifying Dockerfile to add new dependency
FROM python:3.8-slim
WORKDIR /app
COPY . /app

# New dependency added here
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir new-dependency

EXPOSE 80
ENV NAME World
CMD ["python", "app.py"]
\`\`\`

3. **Rebuild the Image**:
   \`\`\`bash
   docker build -t my-python-app:latest .
   \`\`\`

### Method 2: Commit Changes from a Container

1. **Run a Container**:
   \`\`\`bash
   docker run -it my-python-app:latest /bin/bash
   \`\`\`

2. **Make Changes in the Container**: Execute commands to update the container's state.

3. **Commit the Container to a New Image**:
   \`\`\`bash
   docker commit <container_id> my-python-app:modified
   \`\`\`

## Modifying a Docker Container

### Executing Commands in a Running Container

1. **Exec into the Container**:
   \`\`\`bash
   docker exec -it <container_name> /bin/bash
   \`\`\`
   This command opens a shell in the running container.

2. **Make Necessary Changes**: Make the required modifications within the container.

### Saving Changes

1. **Commit the Changes**:
   \`\`\`bash
   docker commit <container_id> my-python-app:modified
   \`\`\`

### Stopping and Removing Containers

1. **Stop a Container**:
   \`\`\`bash
   docker stop <container_name>
   \`\`\`

2. **Remove a Container**:
   \`\`\`bash
   docker rm <container_name>
   \`\`\`

### Changing Image Tags

1. **Tag an Image**:
   \`\`\`bash
   docker tag my-python-app:latest my-python-app:v1.1
   \`\`\`

2. **Push the Image to a Registry**:
   \`\`\`bash
   docker push my-python-app:v1.1
   \`\`\`

### Pausing and Unpausing Containers

1. **Pause a Container**:
   \`\`\`bash
   docker pause <container_name>
   \`\`\`

2. **Unpause a Container**:
   \`\`\`bash
   docker unpause <container_name>
   \`\`\`

---

