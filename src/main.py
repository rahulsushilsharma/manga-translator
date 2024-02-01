import cv2
import pytesseract

# Install pytesseract and pytesseract.pytesseract
# Also, make sure Tesseract OCR is installed on your machine

# Example image file path
image_path = './output1.png'

# Read the image using OpenCV
original_image = cv2.imread(image_path)

# Convert the image to grayscale
gray_image = cv2.cvtColor(original_image, cv2.COLOR_BGR2GRAY)

# Use Tesseract OCR to get the text
# text = pytesseract.image_to_string(gray_image)

# Get the bounding boxes for each word detected by Tesseract
boxes = pytesseract.image_to_boxes(gray_image)

# Draw bounding boxes around the detected text
for box in boxes.splitlines():
    b = box.split()
    x, y, w, h = int(b[1]), int(b[2]), int(b[3]), int(b[4])
    cv2.rectangle(original_image, (x, y), (w, h), (0, 255, 0), 2)

# Display the original image with bounding boxes
print(boxes)
cv2.imshow('Detected Text', original_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
