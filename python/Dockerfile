FROM python:3.7-stretch

RUN pip install flask

# Needed by the Flask module
ENV FLASK_APP=server.py

# Copy source files into the image
COPY templates ./templates
COPY server.py .

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]