from rest_framework.views import APIView
from rest_framework.response import Response


class Login(APIView):
    def get(self, req):
        products = [
            {
                "name": "ac"
            }, {
                "name": "ac"
            }, {
                "name": "ac"
            }
        ]
        return Response("authenticated")


class Register(APIView):
    def post(self, req):
        products = [
            {
                "name": "ac"
            }, {
                "name": "ac"
            }, {
                "name": "ac"
            }
        ]
        return Response("account created")


class Products(APIView):
    def get(self, req):
        return Response("pk")


class Product(APIView):
    def get(self, req, pk):
        return Response(pk)

    # def post(self, req, pk):
    #     return Response("post "+pk)

    # def put(self, req, pk):
    #     return Response("put "+pk)

    # def delete(self, req, pk):
    #     return Response("delete "+pk)
