import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "@/hooks/useUsers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: users, isLoading, error } = useUsers();

  const user = users?.find((u) => u.id === Number(id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-32 bg-gray-200 rounded-full w-32 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-600">
              {error ? "Failed to load user details." : "User not found."}
            </AlertDescription>
          </Alert>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => navigate("/users")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Users
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate("/users")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Users
        </Button>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">
                  {user.name.firstname[0]}
                  {user.name.lastname[0]}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {user.name.firstname} {user.name.lastname}
              </h1>
              <p className="text-gray-600">@{user.username}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{user.email}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{user.phone}</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  {user.address.street} {user.address.number},{" "}
                  {user.address.city}, {user.address.zipcode}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Location Details
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">City:</span> {user.address.city}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Street:</span>{" "}
                  {user.address.street} {user.address.number}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Zipcode:</span>{" "}
                  {user.address.zipcode}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Coordinates:</span>{" "}
                  {user.address.geolocation.lat},{" "}
                  {user.address.geolocation.long}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetail;
